// @flow

import store from '../store'

export default function getSchemaObject(id: string): Object | null {
  let state = store.getState();
  if (state && state.schema && state.schema.index[id]) {
    return state.schema.index[id]
  }
  return null;
}