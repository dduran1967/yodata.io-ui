// @flow

import stampit from 'stampit'
import isFunction from 'lodash/isFunction'
import { Subject } from 'rxjs'
import { flow } from 'lodash'

type Enhancer = (Object) => Object;

type Service = {
  name: string,
  eventMiddle: Array<Enhancer>,
  applyHooks: (Action) => Action,
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
    observable$: new Subject(),
  },
  methods: {
    applyHooks: function (action: Action, context) {
      return this.eventMiddleware.reduce((action, fn) => {
        return fn(action, context);
      }, action);
    },
    use(fn: Enhancer): Map<string, Enhancer> {
      if (isFunction(fn)) {
        let hook = fn.bind(this);
        this.eventMiddleware.push(hook);
      }
      return this;
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
      let nextAction = flow(
        action => this.applyHooks(action, this),
        this.validate,
      )(action);
      if (nextAction.error) {
        this.observable$.error(nextAction)
      }
      else {
        this.observable$.next(nextAction);
      }
      return nextAction
    },
    subscribe(next, ...rest) {
      return this.observable$.subscribe(next, ...rest);
    },
  },
  initializers: [
    function (props: any) {
      let { name, eventMiddleware } = props;
      if (typeof name === 'string') {
        this.name = name;
      }
      if (Array.isArray(eventMiddleware)) {
        this.eventMiddleware = eventMiddleware;
      }
    },
  ],
});

export default serviceFactory;
