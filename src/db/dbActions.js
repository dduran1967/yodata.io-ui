import {createAction} from 'redux-actions'

export const subscribe = createAction('DB/SUBSCRIBE')
export const cancelSubscription = createAction('DB/CANCEL_SUBSCRIPTION')
export const updateSubscription = createAction('DB/SUBSCRIPTION_UPDATED')
export const subscriptionActive = createAction('DB/SUBSCRIPTION_ACTIVE')
export const subscriptionCompleted = createAction('DB/SUBSCRIPTION_COMPLETED')

