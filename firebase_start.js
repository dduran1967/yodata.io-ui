const firebase = require('firebase')
const app = firebase.initializeApp({
  apiKey: 'AIzaSyAuLfAq8F2ibOTuMe3Ql7UmwGWHEXHqkiU',
  authDomain: 'yodata-1115.firebaseapp.com',
  databaseURL: 'https://yodata-1115.firebaseio.com',
  storageBucket: 'yodata-1115.appspot.com',
  messagingSenderId: '776960890496',
})

module.exports = app;
window.firebase = app;