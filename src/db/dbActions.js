// @flow
import {createAction} from 'redux-actions'
import t from 'tcomb'
import actionService from '../services/action_service.js';

export function subscribe(name, url) {
  t.String(name);
  t.String(url);
  return {
    type: 'DB/SUBSCRIBE',
    payload: {
      name,
      type: 'SubscribeAction',
      object: url,
    },
  }
}
actionService.register('subscribe', subscribe)

export function cancelSubscription(name) {
  t.String(name);
  return {
    type: 'DB/CANCEL_SUBSCRIPTION',
    payload: {
      type: 'CancelAction',
      object: {name},
    },
  }
}

export function updateSubscription(name, value) {
  return {
    type: 'DB/SUBSCRIPTION_UPDATED',
    payload: {type: 'UpdateAction', name, value},
  }
}

export const subscriptionActive = createAction('DB/SUBSCRIPTION_ACTIVE');
export const subscriptionCompleted = createAction('DB/SUBSCRIPTION_COMPLETED');
export const GET = createAction('DB/GET');
export const PUT = createAction('DB/PUT');
export const POST = createAction('DB/POST');
export const PATCH = createAction('DB/PATCH');
export const dbSearch = createAction('DB/SEARCH');
export const dbAddStatement = createAction('DB/ADD_STATEMENT');
export const dbSearchReset = createAction('DB/SEARCH_RESET');
export const dbSearchItemSelected = createAction('DB/SEARCH_ITEM_SELECTED');
export const fetchUrl = createAction('DB/FETCH_URL');
export const createSubcription = createAction('DB/SUBSCRIBE', (url, name) => {
  return {
    url,
    name: name || url,
  };
});
