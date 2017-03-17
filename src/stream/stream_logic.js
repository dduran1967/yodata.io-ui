import {createLogic} from 'redux-logic'
import axios from 'axios'

export const streamLogic = createLogic({
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

export default [
  streamLogic
]