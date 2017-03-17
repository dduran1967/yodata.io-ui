import {handleActions} from 'redux-actions'

const reducer = handleActions(
  {
    ADD: (state, action) => {
      let {types} = state;
      return types.items.push(action);
    }
  },
  {
    types: {
      items: []
    }
  }
)

export default reducer;
