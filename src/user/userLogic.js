// @flow

import {createLogic} from 'redux-logic'
import createUserAccountData from './createUserAccountData'
import currentUser from './currentUser'
import {USER_BASE} from './user-config'
import userGraph from './userGraph'

async function accountExists(uid) {
  return window.firebase.database().ref(`user/${uid}/profile/${uid}`).once('value').then(snap => {
    return snap.val() !== null
  })
}

function userBase(uid) {
  return USER_BASE.replace('{uid}', uid)
}

export const accountInit = createLogic({
  type:           'USER/ACCOUNT_INIT',
  processOptions: {
    successType: 'USER/ACCOUNT_INIT_COMPLETED',
    failType:    'USER/ACCOUNT_INIT_FAILED',
  },
  validate({action}, allow, reject) {
    let user = currentUser();
    if (!user) {
      return reject();
    }
    accountExists(user.uid)
    .then(exists => {
      if (exists) {
        reject(action);
      } else {
        let base = userBase(user.uid);
        let data = createUserAccountData(base, user);
        allow({...action, payload: {id: base, uid: user.uid, ...data}})
      }
    })
  },
  process({action, firebase}) {
    return firebase.database()
                   .ref(action.payload.id)
                   .set({...action.payload})
                   .then(() => {
                     return (action.payload)
                   })
  }
})

const userFetchProfile = createLogic({
  type:           'USER/FETCH_PROFILE',
  cancelType:     'USER/FETCH_PROFILE_CANCEL',
  latest:         true,
  processOptions: {
    dispatchReturn: false,
    successType:    'USER/FETCH_PROFILE_SUCCESS',
    failType:       'USER/FETCH_PROFILE_FAIL'
  },
  process({action}, dispatch) {
    let {url} = action.payload;
    return userGraph.fetch(url).then(() => dispatch(userGraph.findOne(url)));
  }
});

const createUserWithEmailAndPassword = createLogic({
  type:           'USER/CREATE_USER_WITH_EMAIL_AND_PASSWORD',
  processOptions: {
    dispatchReturn: true,
    successType:    'USER/CREATE_USER_WITH_EMAIL_AND_PASSWORD_SUCCESS',
    failType:       'USER/CREATE_USER_WITH_EMAIL_AND_PASSWORD_FAIL'
  },
  process({action, firebase}) {
    let {email, password} = action.payload;
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(console.log)
    .catch(console.error);
  }
});

const signOut = createLogic({
  type:           'USER/SIGN_OUT',
  processOptions: {
    dispatchReturn: false,
    successType:    'USER/SIGN_OUT_SUCCESS',
    failType:       'USER/SIGN_OUT_FAIL'
  },
  process({firebase}) {
    firebase.auth().signOut();
  }
});

const signInWithEmailAndPassword = createLogic({
  type:           'USER/SIGN_IN_WITH_EMAIL_AND_PASSWORD',
  cancelType:     'USER/SIGN_IN_WITH_EMAIL_AND_PASSWORD_CANCEL',
  latest:         true,
  processOptions: {
    dispatchReturn: true,
    successType:    'USER/SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS',
    failType:       'USER/SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAIL'
  },
  process({action, firebase}) {
    let {email, password} = action.payload;
    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(console.log);
  }
});

export default [
  userFetchProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
];
