// @flow

import * as firebase from 'firebase';
import {createLogic} from 'redux-logic';
import urlToKey from '../lib/util/urlToKey';

const createChannel = createLogic({
  type: 'CHANNEL/CREATE',
  processOptions: {
    dispatchReturn: true,
    successType: 'CHANNEL/CREATE_SUCCESS',
    failType: 'CHANNEL/CREATE_FAIL',
  },
  transform({getState, action}, next) {
    let {user: {currentUser: {uid}}} = getState();
    let label = action.payload;
    let path = [uid, 'channel/item', label].join('/');
    let res = {
      type: action.type,
      payload: {
        id: path,
        type: 'Channel',
        label: label,
      },
      meta: {
        uid: uid,
      },
    };
    next(res);
  },
  process({action}) {
    return firebase
      .database()
      .ref(action.payload.id)
      .set(action.payload)
      .then(() => action);
  },
});

const fetchUserChannels = createLogic({
  type: 'CHANNEL/FETCH_USER_CHANNELS',
  cancelType: 'CHANNEL/FETCH_USER_CHANNELS_CANCEL',
  latest: true,
  processOptions: {
    successType: 'CHANNEL/USER_CHANNELS_ITEMS_NEXT',
    failType: 'CHANNEL/USER_CHANNELS_ITEMS_FAIL',
  },
  process({getState, action}, dispatch, done) {
    let {uid} = action.payload;
    firebase.database().ref(uid).child('channel/item').on('value', snapshot => {
      dispatch(snapshot.val());
    });
  },
});

type ChannelAddAction = {
  type: 'CHANNEL/ADD_ACTION',
  payload: {
    channel: string,
    action: string,
  },
};

const channelAddAction = createLogic({
  type: 'CHANNEL/ADD_ACTION',
  processOptions: {
    successType: 'CHANNEL/ADD_ACTION_COMPLETED',
    failType: 'CHANNEL/ADD_ACTION_FAILED',
  },
  transform({getState, action}, next) {
    let {user: {currentUser: {uid}}} = getState();
    let channelPath = action.payload.channel;
    let actionId = action.payload.action;
    let key = urlToKey(actionId);
    let path = [channelPath, 'action', key].join('/');
    let res = {
      type: action.type,
      payload: {
        id: actionId,
      },
      meta: {
        uid: uid,
        path: path,
      },
    };
    next(res);
  },
  process({action}) {
    return firebase
      .database()
      .ref(action.meta.path)
      .set(action.payload)
      .then(() => action);
  },
});

export default [createChannel, fetchUserChannels, channelAddAction];
