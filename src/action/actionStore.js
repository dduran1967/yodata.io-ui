// @flow
import {observable, extendObservable, autorun, action, computed} from 'mobx';
import uuid from 'uuid/v1';
import Action from './Action';
import types from '../type/typeStore';
import {sym} from '../lib/rdf-utilities';

class ActionStore {
  constructor() {
    extendObservable(this, {
      loaded:        false,
      items:         [],
      currentAction: null,

      add: action('actions:AddAction', function ({id = uuid(), ...props}) {
        this.items.push({id, ...props});
      }),

      load: action('load actions', function () {
        this.items = types.actions;
      }),

      setCurrentAction: action('actions:SetCurrentAction', function (action) {
        this.currentAction = action
      }),

      index: computed(function () {
        let idx = {};
        this.items.forEach(item => idx[sym(item.id)] = item);
        return idx;
      }),

      list: computed(function () {
        return this.items.map(item => new Action(item));
      }),

    });
  }

  findOne = (subject) => {
    if (sym(subject)) {
      let res = types.findOne(sym(subject));
      let props = types.propertiesOfDeep(sym(subject));
      return {...res, properties: props}
    }
  }
}

const actions = new ActionStore();
export default observable(actions);

autorun(() => {
  window.$actions = actions;
});
