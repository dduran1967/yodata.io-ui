import * as firebase from 'firebase'
import {Statement} from 'rdflib'
import root from 'window-or-global'
import channel from './channel/channelActions'
import {dbAction} from './db'
import {default as DB} from './db/DB'
import {default as bsf} from './lib/util/base64urlEncode'
import schema from './schema/schemaActions'
import user from './user/userActions'
import mapStatementToFirebase from './lib/util/mapStatementToFirebase.js';

class Yo {
  act = {
    user,
    channel,
    schema,
    db: dbAction
  }

  get currentUser() {
    return firebase.auth().currentUser;
  }

  get db() {
    return new DB(firebase.database().ref(firebase.auth().currentUser.uid).toString());
  }

  get bsf() {
    return bsf
  }

  statementToFirebase = (statement: Statement) => mapStatementToFirebase(statement)
}

const yo = new Yo()

root.yo = yo;
export default yo
