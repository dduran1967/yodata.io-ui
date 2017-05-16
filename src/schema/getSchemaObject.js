// @flow

import store from '../store'

declare type SchemaObject = {
  type: string,
  id?: string,
  subClassOf?: Array<string>,
  domainIncludes?: Array<string>,
  rangeIncludes?: Array<string>,
  supercededBy?: string,
}

export default function getSchemaObject(id: string): SchemaObject {
  let state = store.getState();
  if (state && state.schema && state.schema.index[id]) {
    return state.schema.index[id]
  }
  throw new Error(`SchemaObject not found ${id}`)
}