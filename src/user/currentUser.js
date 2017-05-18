// @flow

import store from '../store';

function currentUser() {
  let state = store.getState();
  return state && state.user;
}

export default currentUser;
