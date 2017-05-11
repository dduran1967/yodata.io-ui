// @flow

import * as firebase from 'firebase';

function currentUser(): firebase.UserInfo | null {
  if (
    window.firebase &&
    window.firebase.auth() &&
    window.firebase.auth().currentUser
  ) {
    return window.firebase.auth().currentUser.toJSON();
  }
  return null;
}

export default currentUser;
