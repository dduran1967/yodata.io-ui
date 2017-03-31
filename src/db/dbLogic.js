// @flow

import * as firebase from 'firebase'
import {createLogic} from 'redux-logic'
import {Subscription} from './dbTypes'
import {subscriptionActive, subscriptionCompleted} from './dbActions';

const addUser = createLogic({
  type: '*',
  transform({getState, action}, next) {
    let {user: {currentUser}} = getState();
    const meta = {
      ...action.meta,
      currentUser
    }
    next({...action, meta})
  }
})

const subscribeLogic = createLogic({
  type:           'DB/SUBSCRIBE',
  cancelType:     'DB/CANCEL_SUBSCRIPTION',
  processOptions: {
    failType: 'DB/SUBSCRIPTION_ERROR'
  },
  transform({getState, action}, next) {
    let {user} = getState();
    let agent = user.currentUser
    let nextAction = {
      type:    action.type,
      payload: {
        subject: action.payload
      },
      meta:    {
        agent: agent.uid,
        db:    firebase.database().ref(agent.uid)
      }
    };
    next(nextAction)
  },
  process({action}, dispatch, done) {
    let subscription = Subscription(action) // validate action
    let {subject} = action.payload;
    let {agent,db} = action.meta;
    subject.map((subjectPath) => {
      let resource = db.child(subjectPath)
      dispatch(subscriptionActive(subjectPath))
      resource.on('value', nextState => {
        dispatch({
          type:    'DB/SUBSCRIPTION_UPDATED',
          payload: {
            subject: subjectPath,
            value:   nextState.val()
          }
        })
      })
    })
  }
})

const subscriptionActiveLogic = createLogic({
  type: 'DB/SUBSCRIPTION_ACTIVE',
  transform({getState, action}, next) {
    next({
      type: action.type,
      payload: {
        subject: action.payload
      }
    })
  }
})

export default [
  addUser,
  subscribeLogic,
  subscriptionActiveLogic
]
