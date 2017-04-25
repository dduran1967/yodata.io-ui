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
      type: 'DB/SUBSCRIBE',
      payload: {
        type: 'SubscribeAction',
        name: 'thrume@root',
        agent: currentUserAgent(),
        object: getThrumeBaseUrl(uid),
        actionStatus: 'PotentialActionStatus',
      },
    })
  },
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
  process({action}) {
    let uid = currentUser().uid;
    let id = action.payload.object;
    let data = createDefaultContainer(uid);
    let ref = firebase.database().ref(id)
    ref.set(data);
  },
})

const initContainer = createLogic({
  type: 'THRUME/INIT_CONTAINER',
  processOptions: {
    dispatchReturn: true,
    successType: 'THRUME/INIT_CONTAINER_COMPLETED',
    failType: 'THRUME/INIT_CONTAINER_FAIL',
  },
  transform({action}, next, reject) {
    let agent = currentUser();
    if (!agent) return reject();

    let object = THRUME_BASE.replace('{uid}', agent);
    let payload = {
      ready: true,
      config: {
        uid: agent,
        root: object,
      },
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
  type: 'THRUME/SEND',
  processOptions: {
    successType: 'THRUME/SEND_COMPLETED',
    failType: 'THRUME/SEND_FAIL',
  },
  validate({action}, allow, reject) {
    try {
      check.assert.string(action.payload.type);
      allow(action)
    } catch (e) {
      console.error('THRUME/SEND ERROR', e);
      reject(action);
    }
  },
  process({getState, action}) {
    let user = currentUser();
    let settings = getState().thrume;
    if (user && user.uid) {
      let inboxURL = settings && settings.inboxURL || `/in/${user.uid}`
      let inbox = firebase.database().ref(inboxURL)
      return inbox.push(action.payload).then(snap => {
        console.info(snap.toString());
        return action.payload;
      })
    }
  },
});

const sendToURL = createLogic({
  type: 'THRUME/SEND_TO_URL',
  processOptions: {
    successType: 'THRUME/SEND_TO_URL_COMPLETED',
    failType: 'THRUME/SEND_TO_URL_FAIL',
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
  process({getState, action}) {
    let user = currentUser();
    let settings = getState().thrume;
    if (user && user.uid) {
      let inboxURL = settings && settings.inboxURL || `/in/${user.uid}`
      let inbox = firebase.database().ref(inboxURL)
      return inbox.push(action.payload.message);
    }
  },
});

const setWebhook = createLogic({
  type: 'THRUME/SET_WEBHOOK',
  processOptions: {
    successType: 'THRUME/SET_WEBHOOK_COMPLETED',
    failType: 'THRUME/SET_WEBHOOK_FAIL',
  },
  process({action}) {
    let user = currentUser();
    if (user && user.uid) {
      let base = getThrumeBaseUrl(user.uid)
      return firebase.database().ref(base).update({'webhook': action.payload}).then(snap => {
        return {'webhook': action.payload}
      })
    }
  },
});

export default [
  onUserSignedIn,
  handleNewAccount,
  send,
  initContainer,
  sendToURL,
  setWebhook,
];
