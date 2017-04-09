import * as firebase from 'firebase';
import {Statement} from 'rdflib';
import root from 'window-or-global';
import * as mockActions from './action/mocks';
import channel from './channel/channelActions';
import {dbAction} from './db';
import {default as DB} from './db/DB';
import {default as bsf} from './lib/util/base64urlEncode';
import mapStatementToDoc from './lib/util/mapStatementToDocStore.js';
import schema from './schema/schemaActions';
import user from './user/userActions';
import * as context from './schema/context.js';
import axios from 'axios';
import keyToUrl from './lib/util/keyToUrl';
import urlToKey from './lib/util/urlToKey';
import lodash from 'lodash';

class Yo {
  act = {
    user,
    channel,
    schema,
    db: dbAction,
  };

  get keyToUrl() {
    return keyToUrl;
  }

  get urlToKey() {
    return urlToKey;
  }

  get currentUser() {
    return firebase.auth().currentUser;
  }

  get db() {
    return new DB(
      firebase.database().ref(firebase.auth().currentUser.uid).toString(),
    );
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

yo.mock = {
  actions: mockActions,
};

root.yo = yo;
root.axios = axios;
root.lodash = lodash;
export default yo;
