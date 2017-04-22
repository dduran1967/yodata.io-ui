// @flow

import check from 'check-types'
import * as firebase from 'firebase'
import {createLogic} from 'redux-logic'
import currentUser from '../user/currentUser.js'
import currentUserAgent from '../user/currentUserAgent'
import getThrumeBaseUrl from './getThrumeBaseUrl'
import {THRUME_BASE} from './thrume-config'
import createDefaultContainer from './thrumeDefaultContainer'

const onUserSignedIn = createLogic({
  type: 'USER/USER_SIGNED_IN',
  process({action}, dispatch) {
    let {uid} = action.payload
    check.assert.string(uid);
    dispatch({
      type:    'DB/SUBSCRIBE',
      payload: {
        type:         'SubscribeAction',
        name:         'thrume@root',
        agent:        currentUserAgent(),
        object:       getThrumeBaseUrl(uid),
        actionStatus: 'PotentialActionStatus'
      }
    })
  }
})

export const handleNewAccount = createLogic({
  name: 'handleNewAccount',
  type: 'DB/SUBSCRIPTION_ERROR',
  validate({action}, allow, reject) {
    try {
      check.assert.match(action.payload.name, 'thrume@root');
      check.assert.null(action.payload.value);
      allow(action);
    } catch (e) {
      reject(action);
    }
  },
  process({action}, dispatch) {
    let id = action.payload.object;
    let data = createDefaultContainer(id);
    let ref = firebase.database().ref(id)
    ref.set(data);
  }
})

const initContainer = createLogic({
  type:           'THRUME/INIT_CONTAINER',
  processOptions: {
    dispatchReturn: true,
    successType:    'THRUME/INIT_CONTAINER_COMPLETED',
    failType:       'THRUME/INIT_CONTAINER_FAIL',
  },
  transform({getState, action}, next, reject) {
    let agent = currentUser();
    if (!agent) return reject();

    let object = THRUME_BASE.replace('{uid}', agent);
    let payload = {
      ready:  true,
      config: {
        uid:  agent,
        root: object
      }
    }
    let nextAction = {...action, payload};
    next(nextAction);
  },
  process({action}) {
    let ref = firebase.database()
                      .ref(action.payload.config.root);
    return ref.set(action.payload).then(() => action.payload);
  },
});

const send = createLogic({
  type:           'THRUME/SEND',
  processOptions: {
    successType: 'THRUME/SEND_COMPLETED',
    failType:    'THRUME/SEND_FAIL',
  },
  validate({action}, allow, reject) {
    try {
      check.assert.string(action.payload.type);
      allow(action)
    } catch (e) {
      console.error(e);
      reject(action);
    }
  },
  process({action}) {
    let user = currentUser();
    check.assert.string(user.uid);
    let dir = getThrumeBaseUrl(user.uid);
    let ref = firebase.database().ref(dir).child('now')
    return ref.push(action.payload);
  }
});

export default [
  onUserSignedIn,
  handleNewAccount,
  send,
  initContainer
];
