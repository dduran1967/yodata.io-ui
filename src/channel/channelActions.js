import {createAction} from 'redux-actions'
const chance = require('chance').Chance();

const fakeChannel = () => ({
  id:      chance.hash({length: 10}),
  name:    chance.word(),
  url:     chance.url(),
  action:  [],
  history: []
})

export const createChannel = createAction('CHANNEL/CREATE', () => ({label: chance.word()}))
export const fetchUserChannels = createAction('CHANNEL/FETCH_USER_CHANNELS', uid => ({uid}))
export const addActionToChannel = createAction('CHANNEL/ADD_ACTION', (channelId, actionId) => ({channelId, actionId}))
export const selectChannel = createAction('CHANNEL/SELECT')
export const fetchChannelItems = createAction('CHANNEL/FETCH_CHANNEL_ITEMS')
export const fetchChannelItem = createAction('CHANNEL/FETCH_ITEM')

export default {
  createChannel,
  fetchUserChannels,
  addActionToChannel,
  selectChannel,
  fetchChannelItem,
  fetchChannelItems
}