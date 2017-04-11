// @flow
import initialState from './schemaInitialState';
import values from 'lodash/values';

type Action = {
  type: string,
  payload: any,
};

const schemaReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case 'SCHEMA/FETCH_SCHEMA_SUCCESS':
      if (!action.payload) {
        return state;
      }
      let index = action.payload.result.data;
      let items = values(index);
      let types = items.filter(prop => prop.type === 'Type');
      let properties = items.filter(prop => prop.type === 'Property');
      let actions = types.filter(type => type.label.endsWith('Action'));
      return {
        ...state,
        hasData: true,
        ...{index, actions, items, types, properties},
      };
    default:
      return state;
  }
};

export default schemaReducer;
