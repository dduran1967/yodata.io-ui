import check from 'check-types'
import {createAction} from 'redux-actions'

export const subscribe = createAction('THRUME/SUBSCRIBE')
export const send = createAction('THRUME/SEND', function send(target: string, object: JSON) {
  check.assert.string(target, 'invalid target (expected string)');
  return {
    type:   'SendAction',
    object: JSON.stringify(object),
    target: target
  }
})

export default {
  subscribe,
  send
}