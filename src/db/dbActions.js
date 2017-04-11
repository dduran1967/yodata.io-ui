import {createAction} from 'redux-actions';

export const subscribe = createAction('DB/SUBSCRIBE');
export const cancelSubscription = createAction('DB/CANCEL_SUBSCRIPTION');
export const updateSubscription = createAction('DB/SUBSCRIPTION_UPDATED');
export const subscriptionActive = createAction('DB/SUBSCRIPTION_ACTIVE');
export const subscriptionCompleted = createAction('DB/SUBSCRIPTION_COMPLETED');
export const dbGet = createAction('DB/GET');
export const dbPut = createAction('DB/PUT');
export const dbPost = createAction('DB/POST');
export const dbPatch = createAction('DB/PATCH');
export const dbSearch = createAction('DB/SEARCH');
export const dbAddStatement = createAction('DB/ADD_STATEMENT');
export const dbSearchReset = createAction('DB/SEARCH_RESET');
export const dbSearchItemSelected = createAction('DB/SEARCH_ITEM_SELECTED');
export const fetchUrl = createAction('DB/FETCH_URL');
