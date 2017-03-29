import streamInitialState from './streamInitalState'

export const streamReducer = (state = streamInitialState, action) => {
  switch (action.type) {
    case 'STREAM/FETCH_STREAM_LIST_SUCCESS':
      if (!action.payload) {
        return state;
      }
      let stream = action.payload;
      return {...state, ...stream}
    case 'STREAM/FETCH_MESSAGE_SUCCESS':
      let {id,data} = action.payload;
      data.id = id;
      return {...state, currentMessage: data,  [id]:data }
    default:
      return state;
  }
}

export default streamReducer