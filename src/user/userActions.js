import {createAction} from 'redux-actions'

export const fetchProfile = createAction(
  'USER/FETCH_PROFILE',
  url => ({url})
)

export const setUser = createAction(
  'USER/SET_USER',
  user => ({user})
)

export const signInWithEmailAndPassword = createAction(
  'USER/SIGN_IN_WITH_EMAIL_AND_PASSWORD',
  (email, password) => ({email, password})
)

export const signOut = createAction('USER/SIGN_OUT')

export const createUserWithEmailAndPassword = createAction(
  'USER/CREATE_USER_WITH_EMAIL_AND_PASSWORD',
  (email, password) => ({email, password})
)

export const authStateChanged = createAction('USER/AUTH_STATE_CHANGED')

export const userSignedIn = createAction('USER/USER_SIGNED_IN')

export const userSignedOut = createAction('USER/USER_SIGNED_OUT')

export const foo = createAction('FOO');

export default {
  fetchProfile,
  setUser,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  authStateChanged,
  userSignedIn,
  userSignedOut,
  foo
}
