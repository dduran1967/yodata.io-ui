// @flow
import initialState from './schema_initial_state'
import schemas from './schema_graph';

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
      let {url} = action.payload;
      let types = schemas.findTypes();
      let actions = schemas.findActions();
      return {...state, types, actions}
    default:
      return state;
  }
}

export default schemaReducer;