// @flow

import store from '../store';
import flatten from 'lodash/flatten'

type Resource = {
  id: string,
  subClassOf?: string
}

export default function getSuperTypes(subject: Resource) {
  if (subject && subject.id) {
    let state = store.getState();
    let typeIndex = {};
    if (state && state.schema && state.schema.index) {
      typeIndex = state.schema.index;
    }
    let superTypes = [subject.id];
    let nextParent = subject.subClassOf;
    while (nextParent && nextParent !== subject.id) {
      superTypes.push(nextParent);
      nextParent = typeIndex[nextParent] && typeIndex[nextParent].subClassOf;
    }
    return flatten(superTypes)
  }
  throw new Error('getSuperTypes called without a subject', subject)
}