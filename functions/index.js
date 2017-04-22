const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// Start writing Firebase Functions
// https://firebase.google.com/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {

  response.send('YO!');
})

exports.in = functions.https.onRequest((request, response) => {
  let {path, params, method, subdomain} = request
  response.send(JSON.stringify({path, params, method, subdomain}, null, 2))
})