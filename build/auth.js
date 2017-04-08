
// FirebaseUI config.
var uiConfig = {
  'signInSuccess': function(user, credential, redirectUrl) {
    debugger;
    handleSignedInUser(user);
    // Do not redirect.
    return false;
  },
  // Opens IDP Providers sign-in flow in a popup.
  'signInFlow': 'popup',
  'signInSuccessUrl': '/#/',
  'signInOptions': [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    }
  ],
  'tosUrl': 'https://www.google.com'
};

// Initialize the FirebaseUI Widget using Firebase.
//var ui = new firebaseui.auth.AuthUI(firebase.auth());
//var currentUid = null;

//var handleSignedInUser = function(user) {
//  currentUid = user.uid;
//  document.getElementById('user-signed-in').style.display = 'block';
//  document.getElementById('user-signed-out').style.display = 'none';
//};

/**
 * Displays the UI for a signed out user.
 */
//var handleSignedOutUser = function() {
//  document.getElementById('user-signed-in').style.display = 'none';
//  document.getElementById('user-signed-out').style.display = 'block';
//  ui.start('#firebaseui-container', uiConfig);
//};

// Listen to change in auth state so it displays the correct UI for when
// the user is signed in or not.
//firebase.auth().onAuthStateChanged(function(user) {
//  // The observer is also triggered when the user's token has expired and is
//  // automatically refreshed. In that case, the user hasn't changed so we should
//  // not update the UI.
//  console.log('AUTH-STATE-CHANGED',user)
//  if (user && user.uid == currentUid) {
//    return;
//  }
//  document.getElementById('loading').style.display = 'none';
//  document.getElementById('loaded').style.display = 'block';
//  user ? handleSignedInUser(user) : handleSignedOutUser();
});

/**
 * Deletes the user's account.
 */
var deleteAccount = function() {
  firebase.auth().currentUser.delete().catch(function(error) {
    if (error.code == 'auth/requires-recent-login') {
      // The user's credential is too old. She needs to sign in again.

      firebase.auth().signOut().then(function() {
        // The timeout allows the message to be displayed after the UI has
        // changed to the signed out state.
        setTimeout(function() {
          alert('Please sign in again to delete your account.');
        }, 1);
      });
    }
  });
};