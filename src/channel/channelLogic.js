import check from 'check-types'
import * as firebase from 'firebase'
import {createLogic} from 'redux-logic'

const createChannel = createLogic({
  type:           "CHANNEL/CREATE",
  processOptions: {
    dispatchReturn: true,
    successType:    "CHANNEL/CREATE_SUCCESS",
    failType:       "CHANNEL/CREATE_FAIL"
  },
  transform({getState, action}, next) {
    let {user: {currentUser: {uid}}} = getState();
    let res = {...action};
    res.uid = uid;
    res.path = [uid, "channel/item", action.payload.label].join("/");
    res.payload.id = res.path;
    next(res);
  },
  process({action}) {
    check.assert.string(action.path);
    return firebase
    .database()
    .ref(action.path)
    .set(action.payload)
    .then(() => action.payload);
  }
});

const fetchUserChannels = createLogic({
  type:           "CHANNEL/FETCH_USER_CHANNELS",
  cancelType:     "CHANNEL/FETCH_USER_CHANNELS_CANCEL",
  latest:         true,
  processOptions: {
    successType: "CHANNEL/USER_CHANNELS_ITEMS_NEXT",
    failType:    "CHANNEL/USER_CHANNELS_ITEMS_FAIL"
  },
  process({getState, action}, dispatch, done) {
    let {uid} = action.payload;
    console.info('watching ' + uid + 'channel/item')
    firebase.database()
            .ref(uid)
            .child('channel/item')
            .on('value', snapshot => {
              dispatch(snapshot.val());
            })
  }
});

export default [createChannel, fetchUserChannels];
