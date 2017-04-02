const initialState = {
  subscription: {}
}

const dbReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DB/SUBSCRIPTION_UPDATED':
      let {subject, value} = action.payload;
      return {...state, [subject]: value}
    case 'DB/SEARCH_RESET':
      return {
        ...state, search: {
          isLoading: false,
          results:   [],
          value:     ''
        }
      }
    default:
      return state;
  }
}

export default dbReducer;