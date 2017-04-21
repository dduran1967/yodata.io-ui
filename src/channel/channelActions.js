// @flow

import {createAction} from 'redux-actions'
import currentUserAgent from '../user/currentUserAgent.js'
import currentUser from '../user/currentUser'
import channelBasePath from './channelBasePath'

export function subscribe(channelName?: string): SubscribeAction {
  try {
    let uid = currentUser().uid;
    let payload = {
      type: 'SubscribeAction',
      name: channelName || 'channel@root',
      agent: currentUserAgent(),
      object: channelBasePath(uid),
      actionStatus: 'PotentialActionStatus',
    }
    return {type: 'CHANNEL/SUBSCRIBE', payload}
  } catch (e) {
    throw new Error(e);
  }
}

export const createChannel = createAction('CHANNEL/CREATE');
export const deleteChannel = createAction('CHANNEL/DELETE_CHANNEL');
export const fetchUserChannels = createAction(
  'CHANNEL/FETCH_USER_CHANNELS',
  uid => ({uid}),
);
export const channelAddAction = createAction('CHANNEL/ADD_ACTION');
export const selectChannel = createAction('CHANNEL/SELECT');
export const fetchChannelItems = createAction('CHANNEL/FETCH_CHANNEL_ITEMS');
export const fetchChannelItem = createAction('CHANNEL/FETCH_ITEM');
export const sendMessageToChannel = createAction('CHANNEL/SEND_MESSAGE');

export default {
  createChannel,
  fetchUserChannels,
  channelAddAction,
  selectChannel,
  fetchChannelItem,
  fetchChannelItems,
  sendMessageToChannel,
};
