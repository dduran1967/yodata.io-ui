import {createAction} from 'redux-actions';

export const createChannel = createAction('CHANNEL/CREATE');
export const fetchUserChannels = createAction(
  'CHANNEL/FETCH_USER_CHANNELS',
  uid => ({uid}),
);
export const channelAddAction = createAction('CHANNEL/ADD_ACTION');
export const selectChannel = createAction('CHANNEL/SELECT');
export const fetchChannelItems = createAction('CHANNEL/FETCH_CHANNEL_ITEMS');
export const fetchChannelItem = createAction('CHANNEL/FETCH_ITEM');

export default {
  createChannel,
  fetchUserChannels,
  channelAddAction,
  selectChannel,
  fetchChannelItem,
  fetchChannelItems,
};
