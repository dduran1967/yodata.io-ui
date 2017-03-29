import {createLogic} from 'redux-logic'
import userGraph from './userGraph'
import * as firebase from 'firebase'


const userFetchProfile = createLogic({
  type:           'USER/FETCH_PROFILE',
  cancelType:     'USER/FETCH_PROFILE_CANCEL',
  latest:         true,
  processOptions: {
    dispatchReturn: false,
    successType:    'USER/FETCH_PROFILE_SUCCESS',
    failType:       'USER/FETCH_PROFILE_FAIL'
  },
  process({getState, action}, dispatch) {
    let {url} = action.payload;
    return userGraph.fetch(url)
                    .then(() => dispatch(userGraph.findOne(url)))
  }
});

const createUserWithEmailAndPassword = createLogic({
  type:           'USER/CREATE_USER_WITH_EMAIL_AND_PASSWORD',
  processOptions: {
    dispatchReturn: true,
    successType:    'USER/CREATE_USER_WITH_EMAIL_AND_PASSWORD_SUCCESS',
    failType:       'USER/CREATE_USER_WITH_EMAIL_AND_PASSWORD_FAIL'
  },
  process({getState, action}) {
    let {email, password} = action.payload;
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(console.log).catch(console.error)
  }
})

const signOut = createLogic({
  type:           'USER/SIGN_OUT',
  processOptions: {
    dispatchReturn: false,
    successType:    'USER/SIGN_OUT_SUCCESS',
    failType:       'USER/SIGN_OUT_FAIL'
  },
  process({getState, action},) {
    firebase.auth().signOut();
  }
})

const signInWithEmailAndPassword = createLogic({
  type:           'USER/SIGN_IN_WITH_EMAIL_AND_PASSWORD',
  cancelType:     'USER/SIGN_IN_WITH_EMAIL_AND_PASSWORD_CANCEL',
  latest:         true,
  processOptions: {
    dispatchReturn: true,
    successType:    'USER/SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS',
    failType:       'USER/SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAIL'
  },
  process({getState, action}, dispatch) {
    let {email, password} = action.payload;
    return firebase.auth().signInWithEmailAndPassword(email, password).then(console.log);
  }
})

export default [
  userFetchProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
]
