// @flow

import getThrumeBaseUrl from './getThrumeBaseUrl';

type S = {}

const initialState = {};

export default function (state:S = initialState, action: Action) {
  switch(action.type) {
    case 'USER/USER_SIGNED_IN':
      let base = getThrumeBaseUrl(action.payload.uid);
      return {...state, base}
    case 'THRUME/SUBSCRIPTION_UPDATED':
      return {...state, '@now': action.payload};
    default:
      return state
  }
}
