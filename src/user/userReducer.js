import userInitialState from './userInitialState'

function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case 'USER/FETCH_PROFILE_SUCCESS':
      if (!action.payload) {
        return state;
      }
      let user = action.payload;
      return {...state, ready: true, ...user}
    case 'USER/CREATE_USER_WITH_EMAIL_AND_PASSWORD_FAIL':
      let {code, message} = action.payload;
      console.error(code, message);
      return {...state, error: action.payload}
    case 'USER/USER_SIGNED_IN':
      return {
        ...state,
        uid: action.payload.uid,
        currentUser: action.payload,
        signedIn: true,
        origin: 'https://yodata.io',
        root: `/user/${action.payload.uid}`,
      }
    case 'USER/USER_SIGNED_OUT':
      return {...state, signedIn: false}
    case 'NOTIFICATIONS/ADD':
      return {
        ...state,
        nextNotification: action.payload
      }
    default:
      return state;
  }
}

export default userReducer