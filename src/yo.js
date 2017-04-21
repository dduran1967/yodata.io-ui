import axios from 'axios'
import check from 'check-types'
import lodash from 'lodash'
import {Statement} from 'rdflib'
import root from 'window-or-global'
import Action from './action/Action'
import * as db from './db'
import {default as bsf} from './lib/util/base64urlEncode'
import keyToUrl from './lib/util/keyToUrl'
import mapStatementToDoc from './lib/util/mapStatementToDocStore.js'
import urlToKey from './lib/util/urlToKey'
import * as context from './schema/context.js'
import getSuperTypes from './schema/getSuperTypes.js'
import store from './store'
import * as thrume from './thrume'
import * as channelActions from './channel/channelActions.js';

import currentUser from './user/currentUser.js'
import currentUserAgent from './user/currentUserAgent.js'

class Yo {
  get db() {
    return db;
  }

  get Action() {
    return Action;
  }

  get channel() {
    return {
      action: channelActions
    }
  }

  get context() {
    return context;
  }

  get thrume() {
    return thrume
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

  statementToDoc = (statement: Statement) => mapStatementToDoc(statement);


  get currentUser() {
    return currentUser(store.getState())
  }

  get currentUserId() {
    return currentUser(store.getState()).uid
  }

  get currentUserAgent() {
    return currentUserAgent
  }

  dispatch(type, payload) {
    store.dispatch({type, payload});
  }
}

const yo = new Yo();

root.yo = yo;
root.axios = axios;
root.lodash = lodash;
root.check = check;
root.getSuperTypes = getSuperTypes
export default yo;
