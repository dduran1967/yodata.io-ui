import {createLogic} from 'redux-logic'
import schemas from './schemaGraph';

export const schemaLogic = createLogic({
  type:           'SCHEMA/FETCH_SCHEMA',
  cancelType:     'SCHEMA/CANCEL_FETCH_SCHEMA',
  latest:         true,
  processOptions: {
    dispatchReturn: true,
    successType:    'SCHEMA/FETCH_SCHEMA_SUCCESS',
    failType:       'SCHEMA/FETCH_SCHEMA_FAIL'
  },
  process({getState, action}) {
    let url = action.payload;
    if (!url) throw new Error('action.payload.url is required');

    return schemas.fetch(url)
                  .then(() => ({url: url}));

  }
});

export default [
  schemaLogic
]
