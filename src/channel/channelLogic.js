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

const channelSendMessage = createLogic({
  type: 'CHANNEL/SEND_MESSAGE',
  processOptions: {
    dispatchReturn: true,
    successType: 'CHANNEL/SEND_MESSAGE_COMPLETED',
    failType: 'CHANNEL/SEND_MESSAGE_FAILED',
  },
  transform({getState, action}, next) {
    let {router, user} = getState();
    let nextAction = {
      ...action,
      meta: {
        channel: user.currentUser.uid + router.route.path,
      },
    };
    next(nextAction);
  },
  process({action}) {
    return firebase
      .database()
      .ref(action.meta.channel)
      .child('item')
      .push()
      .then(ref => {
        let message = {...action.payload, id: ref.key};
        ref.set(message);
        return message;
      });
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
    let key = action.payload.action;
    let path = [channelPath, 'action', key].join('/');
    let res = {
      type: action.type,
      payload: {
        id: key,
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

export default [
  createChannel,
  fetchUserChannels,
  channelAddAction,
  channelSendMessage,
];
