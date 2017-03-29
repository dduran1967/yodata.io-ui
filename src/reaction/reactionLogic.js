import {reactionInitialState} from './reactionInitialState'

//export const reactionLogic = createLogic({
//  type:           'SCHEMA/FETCH_SCHEMA',
//  cancelType:     'SCHEMA/CANCEL_FETCH_SCHEMA',
//  latest:         true,
//  processOptions: {
//    dispatchReturn: true,
//    successType:    'SCHEMA/FETCH_SCHEMA_SUCCESS',
//    failType:       'SCHEMA/FETCH_SCHEMA_FAIL'
//  },
//  process({getState, action}) {
//    let url = action.payload;
//    if (!url) throw new Error('action.payload.url is required');
//
//    if (schemas.hasGraph(url)) {
//      return;
//    }
//
//    return schemas.fetch(url)
//                  .then(() => ({url: url}));
//
//  }
//});

export const reactionReducer = (state = reactionInitialState, action) => {
  return state;
}
