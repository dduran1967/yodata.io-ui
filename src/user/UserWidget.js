// @flow

import React from 'react';
const firebase = require('firebase')
const firebaseui = require('firebaseui')

var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ]
});

const UserAuthWidget = () => <div id="firebaseui-auth"></div>


export default UserAuthWidget
