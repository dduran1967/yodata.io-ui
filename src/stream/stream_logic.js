import axios from 'axios'
import * as firebase from 'firebase'
import {createLogic} from 'redux-logic'


export const saveReaction = createLogic({
  type:           'STREAM/SAVE_REACTION',
  cancelType:     'STREAM/CANCEL_SAVE_REACTION',
  latest:         true,
  processOptions: {
    dispatchReturn: true,
    successType:    'STREAM/SAVE_REACTION_SUCCESS',
    failType:       'STREAM/SAVE_REACTION_FAIL'
  },
  process({getState, action}) {
    let message = {
      method:  'put',
      url:     action.payload.url + '.handler.js',
      data:    action.payload.data,
      headers: {
        'Content-Type': 'text/plain'
      }
    }
    return axios(message)
  }
});

export const fetchStreamList = createLogic({
  type:           'STREAM/FETCH_STREAM_LIST',
  cancelType:     'STREAM/CANCEL_FETCH_STREAM_LIST',
  latest:         true,
  processOptions: {
    dispatchReturn: false,
    successType:    'STREAM/FETCH_STREAM_LIST_SUCCESS',
    failType:       'STREAM/FETCH_STREAM_LIST_FAIL'
  },
  process({action}, dispatch) {
    let streams = firebase.database().ref('stream');
    streams.on('value', snapshot => {
      dispatch(snapshot.val());
    })
  }
})

const fetchMessage = createLogic({
  type:           'STREAM/FETCH_MESSAGE',
  cancelType:     'STREAM/CANCEL_FETCH_MESSAGE',
  latest:         true,
  processOptions: {
    dispatchReturn: true,
    successType:    'STREAM/FETCH_MESSAGE_SUCCESS',
    failType:       'STREAM/FETCH_MESSAGE_FAIL'
  },
  process({getState, action}, dispatch) {


    let {url} = action.payload;
    return axios.get(url).then(res => {
      return {
        id:   url,
        data: res.data
      }
    })
  }
})

const addStream = createLogic({
  type:           'STREAM/ADD_STREAM',
  processOptions: {
    dispatchReturn: true,
    successType:    'STREAM/ADD_STREAM_SUCCESS',
    failType:       'STREAM/ADD_STREAM_FAIL'
  },
  process({action}) {
    let streams = firebase.database().ref(`stream`);
    streams.push(action.payload);
    return action.payload;
  }
})

export default [
  saveReaction,
  fetchStreamList,
  fetchMessage,
  addStream
]


//let target = userGraph.sym(url);
//let base = url;
//let contentType = 'application/ld+json'
//$rdf.serialize(target, userGraph, base, contentType, (err, res) => {
//  dispatch(JSON.parse(res))
//})