export default function reactionReducer(state = {}, action) {
  switch (action.type) {
    case 'REACTION/SAVE_FILE_COMPLETED':
      return {...state, ...action.payload}
    default:
      return state
  }
}
