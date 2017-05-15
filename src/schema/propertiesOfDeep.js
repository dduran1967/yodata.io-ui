// @flow

import superTypesOf from './getSuperTypes';
import propertiesOf from './propertiesOf';
import flatMap from 'lodash/flatMap';

type S = {
  id: string,
  subClassOf?: string
}

export default function propertiesOfDeep(subject: S) {
  let superTypes = superTypesOf(subject);
  let propMap = superTypes.reduce((properties, superType) => {
    return { ...properties, [superType]: propertiesOf(superType) };
  }, {});
  return flatMap(propMap);
}