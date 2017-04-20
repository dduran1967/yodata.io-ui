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
      return {...state, currentUser: action.payload, signedIn: true}
    case 'USER/USER_SIGNED_OUT':
      return {...state, signedIn: false}
    default:
      return state;
  }
}

export default userReducer