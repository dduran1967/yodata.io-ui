import Type from 'archetype-js'
import * as firebase from 'firebase'

export const User = new Type({
  uid: {
    $type:     'string',
    $required: true
  }
}).compile('User')

export const Subscription = new Type({
  payload: {
    subject: [],
  },
  meta:    {
    agent: 'string',
    db:    firebase.database.Reference
  }
}).compile('Subscription')

export const SubscriptionUpdate = new Type({
  path:  {
    $type:     String,
    $required: true
  },
  value: {
    $type:     Object,
    $required: true
  }
}).compile('SubscriptionUpdate')

