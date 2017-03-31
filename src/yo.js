import * as firebase from 'firebase'
import root from 'window-or-global'
import channel from './channel/channelActions'
import schema from './schema/schemaActions'
import user from './user/userActions'
import {dbAction} from './db'

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
    return firebase.database().ref(firebase.auth().currentUser.uid)

  }
}

const yo = new Yo()

root.yo = yo;
export default yo
