// @flow

import superTypesOf from './getSuperTypes';
import propertiesOf from './getPropertiesOf';

type S = {
  id: string,
  subClassOf?: string
}

export default function propertiesOfDeep(subject: S) {
  let superTypes = superTypesOf(subject);
  return superTypes.reduce((properties, superType) => {
    return { ...properties, [superType]: propertiesOf(superType) };
  }, {});
}