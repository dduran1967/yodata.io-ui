// @flow

import createCollection from './collectionFactory';
import {addReducerToStore} from '../store';

const service = createCollection({ name: 'example' });
service.use(function(action) {
  if (action && action.object && action.object.exampleOfWork) {
    return {
      ...action,
      targetCollection: `/example/${action.object.exampleOfWork}`
    };
  }
  return action;
});

export default service;

export function exampleReducer<Reducer>(state = {}, action: Action): Object {
  if (
    action.targetCollection &&
    typeof action.targetCollection === 'string' &&
    action.targetCollection.startsWith('/example')
  ) {
    switch (action.type) {
      case 'AddAction':
        if (action.object && action.object.id) {
          return { ...state, [action.object.id]: action.object };
        }
        break;
      default:
        return state;
    }
  }
  return state;
}
