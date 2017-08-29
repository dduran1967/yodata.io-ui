# Yodata.io - Developer Portal WebUI (WIP)

## Project Stack
- React 15.4/create-react-app base
- Firebase Database
- Firebase Auth UI

## Setup
```bash
$ npm install
$ npm start
$ open http://localhost:3000
```

## Firebase Auth Integration
FirebaseUI loaded from CDN in public/index.html

```javascript
// file: src/ViewSelector.js

// load state from redux
const controller = connect(state => ({
  search: state.search,
  route: state.router.route,
  user: state.user,
}));

// if user is not authenticated, show firebase authentication widget
if (user.signedIn === false) {
 location.assign('/widget.html')
return <div />
}
```

public/widget.html passes control to firebase auth and calls signInSuccess on user login or signup

```html
<head>
  <meta charset="UTF-8">
  <title>FirebaseUI Authentication Widget</title>
  <script src="https://www.gstatic.com/firebasejs/live/3.9/firebase.js"></script>
  <!-- get firebase credentials from config.js -->
  <script src="./config.js"></script>
  <!-- load firebase ui from CDN -->
  <script src="https://cdn.firebase.com/libs/firebaseui/2.3.0/firebaseui.js"></script>
  <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.3.0/firebaseui.css" />
  <style>
    body {
      margin: 0;
    }
  </style>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script type="text/javascript">
    // FirebaseUI config.
    var uiConfig = {
      // Url to redirect to after a successful sign-in.
      'signInSuccessUrl': '/',
      'callbacks': {
        'signInSuccess': function (user, credential, redirectUrl) {
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
      'signInOptions': [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      'tosUrl': 'https://www.google.com'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded to include the FirebaseUI sign-in widget
    // within the element corresponding to the selector specified.
    ui.start('#firebaseui-auth-container', uiConfig);
  </script>
</head>

<body>
  <!-- firebase authentication ui loaded into this container -->
  <div id="firebaseui-auth-container"></div>
</body>

</html>
```