import store from '../store'

export default function getSchemaObject(subjectId) {
  return store.getState().schema.index[subjectId];
}