import {createAction} from 'redux-actions'
import typeStore from '../schema/schema_graph.js'
const chance = require('chance').Chance();

const fakeStream = () => ({
  id:      chance.url(),
  name:    chance.word(),
  action:  [],
  history: []
})

const getSelectedAction = action => {
  return typeStore.findSubject(action.id);
}

export const addStream = createAction('STREAM/ADD_STREAM', fakeStream);
export const addAction = createAction('STREAM/ADD_ACTION', (streamId, actionId) => ({streamId, actionId}));
export const selectStream = createAction('STREAM/SELECT_STREAM', selected => ({selected}));
export const selectStreamAction = createAction('STREAM/SELECT_STREAM_ACTION', getSelectedAction);
export const hideProperty = createAction('STREAM/HIDE_PROPERTY');
export const showProperty = createAction('STREAM/SHOW_PROPERTY');
export const saveReaction = createAction('STREAM/SAVE_REACTION', ({url, data}) => ({url, data}))

export default {
  addStream,
  addAction,
  selectStream,
  selectStreamAction,
  hideProperty,
  showProperty,
  saveReaction
}