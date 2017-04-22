const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

admin.initializeApp(functions.config().firebase);
const db = admin.database();


// const TEST_URL = 'http://axiosb.in/1mqw97l1';

exports.webhooks = functions.database.ref('/in/{uid}').onWrite(event => {
  let uid = event.params.uid
  console.log('uid=',uid);
  let webhook = db.ref(`/user/${uid}/thrume/webhook`);
  return webhook.once('value').then(snap => {
    console.log(snap.val());
    if (snap.val() === null) {
      console.log('no webhook, no cry.');
      return Promise.resolve();
    } else {
      let hook = snap.val();
      let body = event.data.val();
      console.log(hook,body)
      return axios.post(hook.url, event.data.val()).then(response => {
        if (response.statusCode >= 400) {
          throw new Error(`HTTP Error: ${response.statusCode}`);
        }
        console.log('Webhook Success', event.data.ref);
      });
    }
  });
});
