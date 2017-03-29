import 'firebaseui/dist/firebaseui.css'
import root from 'window-or-global'
import store from '../store'
const firebase = require('firebase')
const firebaseui = require('firebaseui')

const dbConfig = {
  apiKey:            "AIzaSyAuLfAq8F2ibOTuMe3Ql7UmwGWHEXHqkiU",
  authDomain:        "yodata-1115.firebaseapp.com",
  databaseURL:       "https://yodata-1115.firebaseio.com",
  storageBucket:     "yodata-1115.appspot.com",
  messagingSenderId: "776960890496"
}

root.firebase = firebase;

firebase.initializeApp(dbConfig);
console.info('FIREBASE - INITIALIZED')

const authenticateUserConfig = {
  callbacks: {
    signInSuccess: function(user, credential, redirectUrl) {
      console.info('LOGIN SUCCESS!')
      handleSignedInUser(user);
      // Do not redirect.
      return true;
    }
  },
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInSuccessUrl: '/',
  signInFlow: 'popup',
  signInOptions: [
    {
      provider:           firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    }
  ],
  tosUrl:        'https://www.google.com'
};
const authenticateUser = new firebaseui.auth.AuthUI(firebase.auth());
const currentUid = null;

const signInWithRedirect = function() {
  window.location.assign('/widget');
};

const signInWithPopup = function() {
  window.open('/widget', 'Sign In', 'width=985,height=735');
};

const handleSignedInUser = function(currentUser) {
  store.dispatch({type: 'USER/USER_SIGNED_IN', payload: currentUser})
}

const handleSignedOutUser = function() {
  store.dispatch({type: 'USER/USER_SIGNED_OUT'})
  authenticateUser.start('#firebaseui-container', authenticateUserConfig)
}

firebase.auth().onAuthStateChanged(function(user){
  console.log('AUTH-STATE-CHANGED', user)
  if (user && user.uid === currentUid) {
    return;
  }

  user ? handleSignedInUser(user) : handleSignedOutUser()
});
