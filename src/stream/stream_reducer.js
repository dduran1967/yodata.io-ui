import {handleActions} from 'redux-actions'
import initialState from './streamInitalState'
import {addStream, addAction, selectStream, selectStreamAction} from './streamActions'

const reducer = handleActions({
  [addStream]:          (state, {payload}) => ({
    ...state,
    items: [...state.items, payload],
    json:  Object.assign({}, state.json, {[payload.name]: payload})
  }),
  [selectStream]:       (state, {payload: {selected}}) => ({
    ...state,
    selected
  }),
  [addAction]:          (state, action) => ({
    ...state

  }),
  [selectStreamAction]: (state, {payload}) => ({
    ...state,
    selectedAction: payload
  })
}, initialState)

//const streamReducer = (state = initialState, {type, payload}) => {
//  switch (type) {
//    case 'STREAM/ADD':
//      return {items: addToSet(state.items, payload)}
//    case 'STREAM/SELECT':
//
//    default:
//      return state;
//  }
//}

export default reducer;