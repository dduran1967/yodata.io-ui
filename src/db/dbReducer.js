// @flow

const initialState = {
  subscription: {},
};

export default function dbReducer(state = initialState, action) {
  switch (action.type) {
    case 'DB/SUBSCRIPTION_ACTIVE':
      let {name} = action.payload;
      let nextSubscription = {...state.subscription, [name]: action.payload}
      return {
        ...state,
        subscription: nextSubscription
      };
    case 'DB/SUBSCRIPTION_UPDATED':
      return {...state, [action.payload.name]: action.payload.value};
    case 'DB/SEARCH_RESET':
      return {
        ...state,
        search: {
          isLoading: false,
          results:   [],
          value:     '',
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
}
