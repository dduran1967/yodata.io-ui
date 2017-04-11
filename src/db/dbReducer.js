const initialState = {
  subscription: {},
};

const dbReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DB/SUBSCRIPTION_UPDATED':
      let {subject, value} = action.payload;
      return {...state, [subject]: value};
    case 'DB/SEARCH_RESET':
      return {
        ...state,
        search: {
          isLoading: false,
          results: [],
          value: '',
        },
      };
    case 'DB/FETCH_URL_COMPLETED':
      return {
        ...state,
        [action.payload.object.id]: action.payload.result.data,
      };
    default:
      return state;
  }
};

export default dbReducer;
