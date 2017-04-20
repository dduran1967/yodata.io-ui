// @flow

import check from 'check-types'
import * as firebase from 'firebase'
import snakeCase from 'lodash/snakeCase'
import {createLogic} from 'redux-logic'
import currentUserAgent from '../user/currentUserAgent.js'
import baseUrl from './channelBaseUrl'
import createChannelContainer from './defaultContainer'

export const subscribe = createLogic({
  type: 'CHANNEL/SUBSCRIBE',
  process({getState}, dispatch) {
    let state = getState();
    let uid = state.user.currentUser.uid
    dispatch({
      type:    'DB/SUBSCRIBE',
      payload: {
        type:         'SubscribeAction',
        name:         'channelroot',
        agent:        currentUserAgent(),
        object:       baseUrl(state.channel, uid),
        actionStatus: 'PotentialActionStatus'
      }
    })
  }
})

export const onCreateAccount = createLogic({
  name: 'channel_handle_new_account',
  type: 'DB/SUBSCRIPTION_ERROR',
  validate({action}, allow, reject) {
    console.debug('validate new channel account', action.payload)
    try {
      check.assert.match(action.payload.name, 'channelroot');
      check.assert.null(action.payload.value);
      allow(action); // create default container when subscription to 'channelroot' returns NULL
    } catch (e) {
      console.error(e);
      reject(action);
    }
  },
  process({action}, dispatch) {
    let id = action.payload.object;
    console.info('PROCESS: CREATE NEW CONTAINER', id)
    let data = createChannelContainer(id);
    let ref = firebase.database().ref(id)
    ref.set(data).then(snap => {
      dispatch({
        type:    'CHANNEL/CONTAINER_CREATE_COMPLETED',
        payload: {
          type:         'CreateAction',
          object:       id,
          actionStatus: 'CompletedActionStatus',
          result:       snap.val()
        }
      })
    })
  }
})

const createChannel = createLogic({
  type:           'CHANNEL/CREATE',
  processOptions: {
    dispatchReturn: true,
    successType:    'CHANNEL/CREATE_SUCCESS',
    failType:       'CHANNEL/CREATE_FAIL'
  },
  transform({getState, action}, next) {
    // {type:'CHANNEL/CREATE', payload: 'channelname'}
    let state = getState();
    let uid = state.user.currentUser.uid;
    let label = snakeCase(action.payload);
    let id = baseUrl(state.channel, uid) + '/' + label;
    let nextAction = {
      ...action, payload: {
        type:   'CreateAction',
        agent:  currentUserAgent(),
        target: id,
        object: {
          id:   id,
          type: 'ThrumeChannel',
        }
      }
    }
    next(nextAction);
  },
  process({action}) {
    let {target, object} = action.payload;
    check.assert.string(target);
    check.assert.string(object.id);
    return firebase.database()
                   .ref(target)
                   .set(object)
                   .then(() => action);
  }
});

const publish = createLogic({
  type:           'CHANNEL/PUBLISH',
  processOptions: {
    successType: 'CHANNEL/PUBLISH_COMPLETED',
    failType:    'CHANNEL/PUBLISH_FAIL'
  },
  transform({getState, action}, next, reject) {
    let errors = [];
    let {channel, message} = action.payload;
    if (!channel) {
      errors.push('Action payload must include a channel property');
    }
    if (!message) {
      errors.push('Action payload must include a message property');
    }
    if (errors.length > 0) {
      reject(errors);
    } else {
      next(action);
    }
  }
});

const sendMessage = createLogic({
  type:           'CHANNEL/SEND_MESSAGE',
  processOptions: {
    dispatchReturn: true,
    successType:    'CHANNEL/SEND_MESSAGE_COMPLETED',
    failType:       'CHANNEL/SEND_MESSAGE_FAILED'
  },
  transform({getState, action}, next) {
    let {router, user} = getState();
    let nextAction = {
      ...action,
      meta: {
        channel: user.currentUser.uid + router.route.path
      }
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
  }
});

const fetchUserChannels = createLogic({
  type:           'CHANNEL/FETCH_USER_CHANNELS',
  cancelType:     'CHANNEL/FETCH_USER_CHANNELS_CANCEL',
  latest:         true,
  processOptions: {
    successType: 'CHANNEL/USER_CHANNELS_ITEMS_NEXT',
    failType:    'CHANNEL/USER_CHANNELS_ITEMS_FAIL'
  },
  process({getState, action}, dispatch, done) {
    let {uid} = action.payload;
    firebase.database().ref(uid).child('channel/item').on('value', snapshot => {
      dispatch(snapshot.val());
    });
  }
});

const deleteChannel = createLogic({
  type:           'CHANNEL/DELETE_CHANNEL',
  processOptions: {
    successType: 'CHANNEL/DELETE_CHANNEL_SUCCESS',
    failType:    'CHANNEL/DELETE_CHANNEL_FAILED'
  },
  process({action}) {
    return firebase
    .database()
    .ref(action.payload)
    .update({_deleted: true, action: {}});
  }
});

const channelAddAction = createLogic({
  type:           'CHANNEL/ADD_ACTION',
  processOptions: {
    successType: 'CHANNEL/ADD_ACTION_COMPLETED',
    failType:    'CHANNEL/ADD_ACTION_FAILED'
  },
  transform({getState, action}, next) {
    let {user: {currentUser: {uid}}} = getState();
    let channelPath = action.payload.channel;
    let key = action.payload.action;
    let path = [channelPath, 'action', key].join('/');
    let res = {
      type:    action.type,
      payload: {
        id: key
      },
      meta:    {
        uid:  uid,
        path: path
      }
    };
    next(res);
  },
  process({action}) {
    return firebase
    .database()
    .ref(action.meta.path)
    .set(action.payload)
    .then(() => action);
  }
});

export default [
  subscribe,
  onCreateAccount,
  createChannel,
  sendMessage,
  fetchUserChannels,
  channelAddAction,
  deleteChannel
];
