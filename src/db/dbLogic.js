// @flow

import check from 'check-types';
import escapeRegExp from 'lodash/escapeRegExp';
import filter from 'lodash/filter';
import isNull from 'lodash/isNull';
import { createLogic } from 'redux-logic';
import Ajv from 'ajv';
import has from 'lodash/has';

const ajv = new Ajv({ allErrors: true });
const subscribePayloadSchema = {
  properties: {
    name: { type: 'string' },
    object: { type: 'string' }
  }
};
const validate = ajv.compile(subscribePayloadSchema);

const onSubscribe = createLogic({
  type: 'DB/SUBSCRIBE',
  cancelType: 'DB/CANCEL_SUBSCRIPTION',
  processOptions: {
    failType: 'DB/SUBSCRIPTION_ERROR'
  },
  validate({ action, getState, firebase }, allow, reject) {
    const payloadIsValid = validate(action.payload);
    const subscriptionExists = has(
      getState().db.subscription,
      action.payload.name
    );
    if (!firebase) {
      reject(action);
    }
    const valid = payloadIsValid && !subscriptionExists;
    if (valid) {
      allow({
        ...action,
        payload: {
          ...action.payload,
          actionStatus: 'PotentialActionStatus'
        }
      });
    } else {
      if (subscriptionExists) {
        console.info('skipping existing subscription', action);
        reject();
      } else {
        console.error('invalid subscription input', action);
        reject(action);
      }
    }
  },
  process({ action, firebase }, dispatch, done) {
    const { object, name } = action.payload;
    const ref = firebase.database().ref(object);
    dispatch({
      type: 'DB/SUBSCRIPTION_ACTIVE',
      payload: { ...action.payload, actionStatue: 'ActiveActionStatus' }
    });
    ref.on('value', nextState => {
      const value = nextState.val();
      const type = isNull(value)
        ? 'DB/SUBSCRIPTION_ERROR'
        : 'DB/SUBSCRIPTION_UPDATED';
      dispatch({
        type,
        payload: {
          name,
          object,
          value
        }
      });
    });
  }
});

const patch = createLogic({
  type: 'DB/PATCH',
  validate({ action }, allow, reject) {
    let valid = check.all(
      check.map(action.payload, {
        entity: check.string,
        attribute: check.string,
        nextValue: check.nonEmptyString
      })
    );
    if (valid) {
      allow(action);
    } else {
      console.error('invalid DB/PATCH payload', action.payload);
      reject(action);
    }
  },
  process({ action, firebase }) {
    let { entity, attribute, nextValue } = action.payload;
    let targetRef = firebase.database().ref(entity);
    return targetRef.update({ [attribute]: nextValue });
  }
});

// const fetch = createLogic({
//   type:           'DB/FETCH_URL',
//   processOptions: {
//     successType: 'DB/FETCH_URL_COMPLETED',
//     failType:    'DB/FETCH_URL_ERROR'
//   },
//   transform({getState, action}, next, reject) {
//     let target = action.payload;
//     console.error('fetch data needs to be updated');
//     return reject();
//
//     if (!target) {
//       console.error('DB/FETCH_URL CALLED WITH NO URL');
//       return reject();
//     }
//
//     let {user: {currentUser}} = getState();
//
//     switch (target[0]) {
//       case '~':
//         target =
//           DB_ORIGIN + target.replace('~', `/${currentUser.uid}`) + '.json';
//         break;
//       case '/':
//         target = DB_ORIGIN + target + '.json';
//         break;
//       default:
//         return reject(action);
//     }
//
//     let nextPayload = {
//       agent:  currentUser,
//       object: {
//         id:  action.payload,
//         url: target
//       }
//     };
//     next({...action, payload: nextPayload});
//   },
//   process({action}) {
//     return axios(action.payload.object.url).then(res => {
//       return {
//         agent:        action.payload.agent,
//         object:       action.payload.object,
//         result:       res,
//         actionStatus: 'CompletedActionStatus'
//       };
//     });
//   }
// });

const searchLogic = createLogic({
  type: 'SEARCH/QUERY',
  latest: true,
  validate({ action }, allow, reject) {
    const query =
      action.payload &&
      action.payload.instrument &&
      action.payload.instrument.query;
    if (query) {
      return allow(action);
    }
    reject(action);
  },
  process({ getState, action, getAction }, dispatch, done) {
    const query = action.payload.instrument.query;
    if (query.length > 2) {
      const re = new RegExp(escapeRegExp(query), 'gi');
      const isMatch = result => re.test(result.label);
      const source = getState().db.schema;
      const searchResults = filter(source, isMatch);
      dispatch(getAction('SEARCH/FIND')(searchResults));
    }
    done();
  }
});

const searchInit = createLogic({
  type: 'SEARCH/INIT',
  process({ getAction }, dispatch) {
    dispatch(getAction('subscribe')('schema', '/public/schema'));
  }
});

// const dbSET = createLogic({
//   type:           'DB/SET',
//   processOptions: {
//     successType: 'DB/SET_COMPLETED',
//     failType:    'DB/SET_FAIL'
//   },
//   process({action}) {
//     return firebase
//     .database()
//     .ref(action.payload.id)
//     .set(action.payload.nextValue)
//     .then(() => {
//       return action.payload;
//     });
//   }
// });

// const saveJsonObject = createLogic({
//   type:           'DB/SAVE_JSON_OBJECT',
//   processOptions: {
//     successType: 'DB/SAVE_JSON_OBJECT_SUCCESS',
//     failType:    'DB/SAVE_JSON_OBJECT_FAIL'
//   },
//   transform({action}, next) {
//     let nextPayload = mapValues(action.payload, value => {
//       if (isArray(value)) {
//         return value.length === 1
//           ? shrinkRdfNode(value[0])
//           : value.map(item => shrinkRdfNode(item));
//       }
//       return shrinkRdfNode(value);
//     });
//     next({...action, payload: nextPayload});
//   },
//   process({action}) {
//     return action.payload;
//   }
// });

const addActionLogic = createLogic({
  type: 'AddAction',
  validate({ action }, allow, reject) {
    const allowed = false;
    if (
      action.targetCollection &&
      action.targetCollection.startsWith('/public/schema/') &&
      action.actionStatus === 'PotentialActionStatus'
    ) {
      allow(action);
    } else if (typeof action.targetCollection === 'string') {
      console.debug('allowing', action)
      allow(action);
    } else {
      console.error('invalid action', action);
      reject(action);
    }
  },
  process({ action, firebase }, dispatch) {
    let ref = firebase.database().ref(action.targetCollection).push();
    let data = { ...action.object, url: ref.toString() };
    ref.set(data).then(e => {
      console.log(e);
      let nextAction = { ...action, status: 'CompletedActionStatus' };
      console.log(nextAction);
    });
  }
});

const updateActionLogic = createLogic({
  type: 'UpdateAction',
  validate({ action }, allow, reject) {
    if (
      action.object &&
      action.result &&
      typeof action.actionStatus === 'undefined'
    ) {
      action.actionStatus = 'ActiveActionStatus';
      if (typeof action.target === 'undefined') {
        action.target = action.result.id;
      }
      allow(action);
    } else {
      console.error('unable to proccess UpdateAction', action);
      reject(action);
    }
  },
  process({ action, firebase }, dispatch) {
    let ref = firebase.database().ref(action.target);
    let data = action.result;
    ref.update(data).then(() => {
      let nextAction = { ...action, actionStatus: 'CompletedActionStatus' };
      console.log(nextAction);
    });
  }
});

export default [
  onSubscribe,
  searchLogic,
  patch,
  searchInit,
  addActionLogic,
  updateActionLogic
];
