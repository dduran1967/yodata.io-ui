const functions = require('firebase-functions');
const request = require('request-promise');

// const TEST_URL = 'http://requestb.in/1mqw97l1';

module.exports = functions.database.ref('/in/{uid}').onWrite(event => {
  let uid = 'JTxSE6RyUaMTcA40I0p5maUlw2G2';
  let webhook = functions.database.ref(`/users/${uid}/thrume/webhook`);

  return webhook.once('value').then(snap => {
    if (snap.val() === null) {
      console.log('no webhook, no cry.');
      return Promise.resolve();
    } else {
      return request({
        uri: webhook.url,
        method: webhook.method || 'POST',
        json: true,
        body: event.data.val(),
        resolveWithFullResponse: true,
      }).then(response => {
        if (response.statusCode >= 400) {
          throw new Error(`HTTP Error: ${response.statusCode}`);
        }
        console.log('Webhook Success', event.data.ref);
      });
    }
  });
});
