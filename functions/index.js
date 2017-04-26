const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
const OnUserCreated = require('./onUserCreated')

const config = functions.config();
admin.initializeApp(config.firebase);

const handlerUserCreated = OnUserCreated('/user/{uid}', admin.database())

exports.webhooks = functions.database.ref('/in/{uid}/{messageId}').onWrite(event => {
  let uid = event.params.uid
  let messageId = event.params.messageId
  let webhook = admin.ref(`/user/${uid}/thrume/webhook`);
  return webhook.once('value').then(snap => {
    if (snap.val() === null) {
      return Promise.resolve(); // no active webhook
    } else {
      let hook = snap.val();
      let body = event.data.val();
      return axios.post(hook.url, event.data.val()).then(response => {
        if (response.statusCode >= 400) {
          throw new Error(`HTTP Error: ${response.statusCode}`);
        }
        console.log({
          type: 'SendAction',
          agent: uid,
          object: event.toString(),
          participant: {
            recipient: hook.url,
          },
        })
      });
    }
  });
});


exports.onUserAccountCreated = functions.auth.user().onCreate(handlerUserCreated)