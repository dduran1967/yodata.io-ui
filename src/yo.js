import * as firebase from 'firebase'
import axios from 'axios'
import check from 'check-types'
import lodash from 'lodash'
import {Statement} from 'rdflib'
import root from 'window-or-global'
import * as db from './db'
import {default as bsf} from './lib/util/base64urlEncode'
import keyToUrl from './lib/util/keyToUrl'
import mapStatementToDoc from './lib/util/mapStatementToDocStore.js'
import urlToKey from './lib/util/urlToKey'
import * as context from './schema/context.js'
import getSuperTypes from './schema/getSuperTypes.js'
import store from './store'
import * as thrume from './thrume'
import * as channelActions from './channel/channelActions.js'
import authService from './services/auth_service.js'
import actionService from './services/action_service.js'
import currentUser from './user/currentUser.js'
import currentUserAgent from './user/currentUserAgent.js'
import * as ho from 'object-hash'
import fetchSQSMessage from './lib/util/fetchSQSMessage'
import getSubClassesOf from './schema/getSubClassesOf.js';
import {getExampleValue, createMockValue, createMockType} from './schema/getExampleValue.js'
import getPropertiesOf from './schema/getPropertiesOf.js';
import propertiesOfDeep from './schema/propertiesOfDeep';


function getSubject(subjectId) {
  return store.getState().schema.index[subjectId];
}

const defaultSQSQueue =
  'https://sqs.us-west-2.amazonaws.com/746950044014/red-rdesk-queue';

class Yo {

  get action() {
    return actionService
  }

  get auth() {
    return authService
  }

  get db() {
    return db;
  }

  get channel() {
    return {
      action: channelActions,
    };
  }

  get context() {
    return context;
  }

  get ho() {
    return ho.sha1;
  }

  get thrume() {
    return thrume;
  }

  get keyToUrl() {
    return keyToUrl;
  }

  get urlToKey() {
    return urlToKey;
  }

  get bsf() {
    return bsf;
  }

  get currentUser() {
    return currentUser();
  }

  get currentUserId() {
    return currentUser(store.getState()).uid;
  }

  get currentUserAgent() {
    return currentUserAgent;
  }

  dispatch(type, payload) {
    store.dispatch({type, payload});
  }

  fetchSQSMessage() {
    return fetchSQSMessage(defaultSQSQueue);
  }

  fetchSQSSampleData(props) {
    let opts = Object.assign(
      {
        numberOfMessagesToFetch: 1,
        destinationPath: '/in/test/sqs/',
      },
      props,
    );
    let db = firebase.database().ref(opts.destinationPath);
    for (let i = 0; i < opts.numberOfMessagesToFetch; i++) {
      fetchSQSMessage(defaultSQSQueue).then(message => {
        db.push(message);
      });
    }
    console.log('done');
  }

  statementToDoc = (statement: Statement) => mapStatementToDoc(statement);

  subscribe(url, name) {
    store.dispatch({
      type: 'DB/SUBSCRIBE',
      payload: {
        type: 'SubscribeAction',
        name: name || url,
        agent: '/user/' + currentUser().uid,
        object: url,
        actionStatus: 'PotentialActionStatus',
      },
    })
  }

  getSchemaObject(key) {
    return store.getState().schema.index[key]
  }

  subClassOf(subject) {
    return getSubClassesOf(subject)
  }

  getPropertiesOf(subjectId) {
    return getPropertiesOf(subjectId);
  }

  getExampleValue(subjectId) {
    let subject = store.getState().schema.index[subjectId]
    return getExampleValue(subject);
  }

  createMockValue(subjectId) {
    return createMockValue(subjectId);
  }

  createMockType(subjectId) {
    let subject = store.getState().schema.index[subjectId];
    let properties = getPropertiesOf(subjectId);
    return createMockType(subjectId, properties);
  }

  addExampleValue(subjectId, value) {
    let subject = getSubject(subjectId);
    return actionService.call('createExampleValue', subject, JSON.stringify(value,null,2) )
  }

  propertiesOfDeep(subjectId) {
    let subject = store.getState().schema.index[subjectId];
    return propertiesOfDeep(subject);
  }

}

const yo = new Yo();

root.yo = yo;
root.axios = axios;
root.lodash = lodash;
root.check = check;
root.getSuperTypes = getSuperTypes;
export default yo;
