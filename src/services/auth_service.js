// @flow

import store from '../store/index';
import actionService from './action_service';

const firebase = window.firebase;
const firebaseui = require('firebaseui');

// AUTH SERVICE ACTIONS
export function login(email, password) {
  return {
    type: 'USER/LOGIN',
    payload: {
      type: 'LoginAction',
      email: email,
      password: password
    }
  };
}
actionService.register('USER/LOGIN', login)


class AuthService {
  constructor({ store, uiConfig }) {
    this.store = store;
    this.uiConfig = uiConfig;
    this.init();
  }

  init() {
    console.log('init auth', firebase.auth());
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
    firebase.auth().onAuthStateChanged(user => {
      console.log('auth state changed', user);
      if (user) {
        store &&
          store.dispatch({
            type: 'USER/USER_SIGNED_IN',
            payload: user.toJSON()
          });
      } else {
        store && store.dispatch({ type: 'USER/USER_SIGNED_OUT' });
      }
    });
  }

  startUI() {
    this.ui.start('#authui', this.uiConfig);
  }

  login(email, password) {
    firebase.auth().provider.signInWithEmailAndPassword(email, password);
  }
}

const auth = new AuthService({
  store: store,
  uiConfig: {
    signInSuccessUrl: '/#/',
    signInFlow: 'popup',
    callbacks: {
      signInSuccess: function(user, credential, redirectUrl) {
        console.log('sign in success callback', user, credential, redirectUrl)
        if (window.opener) {
          // The widget has been opened in a popup, so close the window
          // and return false to not redirect the opener.
          window.close();
          return false;
        } else {
          // The widget has been used in redirect mode, so we redirect to the signInSuccessUrl.
          return true;
        }
      }
    },
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    // Terms of service url.
    tosUrl: 'https://yodata.io/yodata_terms_of_service.html'
  }
});

export default auth;
