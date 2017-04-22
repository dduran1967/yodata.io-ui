// @flow

import check from 'check-types'
import * as firebase from 'firebase'
import escapeRegExp from 'lodash/escapeRegExp'
import filter from 'lodash/filter'
import isNull from 'lodash/isNull'
import {createLogic} from 'redux-logic'
import {lit} from '../lib/rdf-utilities.js'


const onSubscribe = createLogic({
  type:           'DB/SUBSCRIBE',
  cancelType:     'DB/CANCEL_SUBSCRIPTION',
  processOptions: {
    failType: 'DB/SUBSCRIPTION_ERROR'
  },
  validate({action}, allow, reject) {
    let valid = check.all(
      check.map(action, {
        payload: {
          type:         check.string, // 'SubscribeAction'
          name:         check.string, // 'thrume@now'
          agent:        check.string, // '/user/{uid}
          object:       check.string, // '/user/{uid}/thrume/
          actionStatus: check.string // 'PotentialActionStatus'
        }
      })
    );
    if (valid) {
      allow(action);
    } else {
      console.error('invalid subscription input', action);
      reject(action);
    }
  },
  process({action}, dispatch, done) {
    const {agent, object, name} = action.payload;
    const ref = firebase.database().ref(object);
    dispatch({
      type:    'DB/SUBSCRIPTION_ACTIVE',
      payload: {...action.payload, actionStatue: 'ActiveActionStatus'}
    });
    ref.on('value', nextState => {
      let value = nextState.val();
      let type = isNull(value) ? 'DB/SUBSCRIPTION_ERROR' : 'DB/SUBSCRIPTION_UPDATED'
      dispatch({
        type,
        payload: {
          name:  name,
          agent: agent,
          object,
          value
        }
      });
    });
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
  type:   'SEARCH_VALUE',
  latest: true,
  transform({getState, action}, next) {
    action.meta = {
      searchValue: action.payload,
      instrument:  'searchLogic',
      source:      getState().schema.actions
    };
    next(action);
  },
  process({action}, dispatch, done) {
    dispatch({type: 'SEARCH_LOADING', payload: true});
    let value = action.payload;
    if (value.length < 2) {
      dispatch({type: 'SEARCH_RESULT', payload: [], meta: action.meta});
    } else {
      let re = new RegExp(escapeRegExp(action.payload), 'gi');
      let isMatch = result => re.test(result.label);
      let source = action.meta.source;
      let searchResults = filter(source, isMatch).map(item => ({
        id:          item.id,
        title:       lit(item.label),
        description: lit(item.description)
      }));
      dispatch({
        type:    'SEARCH_RESULT',
        payload: searchResults,
        meta:    action.meta
      });
    }
    dispatch({type: 'SEARCH_LOADING', payload: false, meta: action.meta});
    done();
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

export default [onSubscribe, searchLogic];
