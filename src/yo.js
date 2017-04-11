import * as firebase from 'firebase';
import {Statement} from 'rdflib';
import root from 'window-or-global';
import * as db from './db';
import {default as bsf} from './lib/util/base64urlEncode';
import mapStatementToDoc from './lib/util/mapStatementToDocStore.js';
import * as context from './schema/context.js';
import axios from 'axios';
import keyToUrl from './lib/util/keyToUrl';
import urlToKey from './lib/util/urlToKey';
import lodash from 'lodash';
import Action from './action/Action';

class Yo {
  get db() {
    return db;
  }

  get Action() {
    return Action;
  }

  get keyToUrl() {
    return keyToUrl;
  }

  get urlToKey() {
    return urlToKey;
  }

  get currentUser() {
    return firebase.auth().currentUser;
  }

  get bsf() {
    return bsf;
  }

  statementToDoc = (statement: Statement) => mapStatementToDoc(statement);

  get context() {
    return context;
  }
}

const yo = new Yo();

root.yo = yo;
root.axios = axios;
root.lodash = lodash;
export default yo;
