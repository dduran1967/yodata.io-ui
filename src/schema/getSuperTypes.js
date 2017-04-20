// @flow

import flatten from 'lodash/flatten'

type Resource = {
  id: string,
  subClassOf?: string
}

export default function getSuperTypes(typeIndex, subject: Resource) {
  let superTypes = [subject.id];
  let nextParent = subject.subClassOf;
  while (nextParent && nextParent !== subject.id) {
    superTypes.push(nextParent);
    nextParent = typeIndex[nextParent] && typeIndex[nextParent].subClassOf;
  }
  return flatten(superTypes)
}