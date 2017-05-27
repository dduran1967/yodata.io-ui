// @flow

import stampit from 'stampit'
import isFunction from 'lodash/isFunction'
import { Subject } from 'rxjs'
import { flow } from 'lodash'

type Enhancer = (Object) => Object;
type Service = {
  name: string,
  eventMiddleware: Array<Enhancer>,
  transform: (Action) => Action,
  use: (Enhancer) => void
};
type ServiceFactoryOptions = {
  name: string,
  eventHook?: Array<Enhancer>,
};
type ServiceFactory = (options: ServiceFactoryOptions) => Service;

const serviceFactory: ServiceFactory = stampit({
  properties: {
    name: 'service',
    eventMiddleware: [],
    input$: new Subject(),
    event$: new Subject()

  },
  methods: {
    use(fn: Enhancer): Map<string, Enhancer> {
      if (isFunction(fn)) {
        let hook = fn.bind(this);
        this.eventMiddleware.push(hook);
      }
      return this;
    },
    transform(action: Action, context) {
      const ctx = context || this;
      return this.eventMiddleware.reduce((action, fn) => {
        return fn(action, ctx);
      }, action);
    },
    validate(action: Action) {
      if (!action.type) {
        return {
          ...action,
          actionStatus: 'FailedActionStatus',
          error: {
            type: 'RequiredPropertyError',
            text: 'Action.type is a required property',
          },
        }
      }
      if (typeof action.type !== 'string') {
        return {
          ...action,
          error: {
            type: 'TypeError',
            text: 'Action.type must be a string.',
          },
        }
      }
      return action;
    },
    dispatch(action: Action) {
      this.input$.next(action)
      let nextAction = flow(
        action => this.transform(action, this),
        this.validate,
      )(action);
      if (nextAction.error) {
        this.event$.error(nextAction)
      }
      else {
        this.event$.next(nextAction);
      }
      return nextAction
    },
    subscribe(next, ...rest) {
      return this.event$.subscribe(next, ...rest);
    },
  },
  initializers: [
    function (props: any) {
      let { name, eventMiddleware } = props;
      if (typeof name === 'string') {
        this.name = name;
      }
      if (Array.isArray(eventMiddleware)) {
        let currentMiddleware = this.eventMiddleware || [];
        this.eventMiddleware = [...currentMiddleware, ...eventMiddleware]
      }
      this.out$ = this.input$.map(action => this.transform(action, this)).map(this.validate)
    },
  ],
});

export default serviceFactory;
