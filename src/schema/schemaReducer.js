// @flow
import initialState from './schemaInitialState'
import schemas from './schemaGraph';

type Action = {
  type: string,
  payload: any
}

const schemaReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case 'SCHEMA/FETCH_SCHEMA_SUCCESS':
      if (!action.payload) {
        return state;
      }
      let types = schemas.findTypes();
      let actions = schemas.findActions();
      return {...state, types, actions, hasData: true}
    default:
      return state;
  }
}

export default schemaReducer;