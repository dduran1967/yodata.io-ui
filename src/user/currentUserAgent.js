// @flow
import * as firebase from 'firebase'
import {USER_BASE} from './user-config'

export default function currentUserAgent(): string {
  let user = firebase.auth().currentUser;
  if (user && user.uid) {
    return USER_BASE.replace('{uid}', user.uid);
  }
  throw new Error('currentUserAgent not available')
}
