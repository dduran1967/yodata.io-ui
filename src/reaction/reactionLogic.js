import {createLogic} from 'redux-logic'
import * as firebase from 'firebase'

const saveFile = createLogic({
  type: 'REACTIONS/SAVE_FILE',
  transform({action}, next) {
    next({...action, meta: {contentType: 'text/javascript'}});
  },
  process({action}, dispatch, done) {
    let user = firebase.auth().currentUser;
    let storageRef = firebase
      .storage()
      .ref(`/user/${user.uid}/reaction/index.js`);
    return storageRef
      .putString(action.payload)
      .then(snap => {

        dispatch({
          type: 'REACTIONS/SAVE_FILE_COMPLETED',
          payload: {
            totalBytes: snap.totalBytes,
            metadata: snap.metadata,
            downloadURL: snap.downloadURL,
          },
        });

        dispatch({
          type: 'NOTIFICATIONS/ADD',
          payload: {
            level: 'success',
            title: `File Saved`,
          },
        });

        done();

      })
      .catch(e =>
        dispatch({
          type: 'NOTIFICATIONS/ADD',
          payload: {level: 'error', message: 'Failed'},
        }),
      );
    done();
  },
});

export default [saveFile];
