// @flow

import filter from 'lodash/filter'
import store from '../store';

function getSubClassesOf(subject: string, collection?: Array<any>): Array<any> {
  let _collection = collection || store.getState().schema.types
  return filter(_collection, { 'subClassOf': subject });
}

export default getSubClassesOf
