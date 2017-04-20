// @flow

import * as firebase from 'firebase';

export default function currentUser(): FirebaseUser | null {
  let user = firebase.auth().currentUser;
  return user && user.toJSON()
}