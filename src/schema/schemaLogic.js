import {createLogic} from 'redux-logic';
import axios from 'axios';
const DB_ORIGIN = 'https://yodata-1115.firebaseio.com';

const fetchSchema = createLogic({
  type: 'SCHEMA/FETCH_SCHEMA',
  cancelType: 'SCHEMA/CANCEL_FETCH_SCHEMA',
  latest: true,
  processOptions: {
    dispatchReturn: true,
    successType: 'SCHEMA/FETCH_SCHEMA_SUCCESS',
    failType: 'SCHEMA/FETCH_SCHEMA_FAIL',
  },
  process({getState, action}) {
    let href = DB_ORIGIN + '/schema.json';
    return axios(href).then(res => {
      return {
        object: href,
        result: res,
        actionStatus: 'CompletedActionStatus',
      };
    });
  },
});

export const fetch = createLogic({
  type: 'DB/FETCH_URL',
  processOptions: {
    successType: 'DB/FETCH_URL_COMPLETED',
    failType: 'DB/FETCH_URL_ERROR',
  },
  transform({getState, action}, next) {
    let target = action.payload;
    let {user: {currentUser}} = getState();
    if (typeof target === 'string') {
      if (target.startsWith('/')) {
        target = DB_ORIGIN + target + '.json';
      }
      if (target.startsWith('~')) {
        target = DB_ORIGIN +
          '/' +
          action.meta.currentUser +
          target.slice(1) +
          '.json';
      }
    }
    let nextPayload = {
      agent: currentUser,
      object: {
        id: action.payload,
        url: target,
      },
    };
    next({...action, payload: nextPayload});
  },
  process({action}) {
    return axios(action.payload.object.url).then(res => {
      return {
        agent: action.payload.agent,
        object: action.payload.object,
        result: res,
        actionStatus: 'CompletedActionStatus',
      };
    });
  },
});

export default [fetchSchema];
