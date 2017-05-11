import filter from 'lodash/filter';

export default function getSubClassesOf(collection, subject) {
  return filter(collection, {'subClassOf': subject});
}