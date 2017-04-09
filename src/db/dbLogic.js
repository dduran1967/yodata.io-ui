// @flow
import shrinkRdfNode from '../lib/util/shrinkRdfNode';
import * as firebase from 'firebase';
import escapeRegExp from 'lodash/escapeRegExp';
import filter from 'lodash/filter';
import {createLogic} from 'redux-logic';
import {lit} from '../lib/rdf-utilities.js';
import {subscriptionActive} from './dbActions';
import mapStatementToDocStore from '../lib/util/mapStatementToDocStore.js';
import mapValues from 'lodash/mapValues';
import isArray from 'lodash/isArray';

type Action = {
  type: string,
  payload?: any,
  meta?: any,
};

const addUser = createLogic({
  type: '*',
  transform({getState, action}, next) {
    let {user: {currentUser}} = getState();
    const meta = {
      ...action.meta,
      currentUser,
    };
    next({...action, meta});
  },
});

const subscribeLogic = createLogic({
  type: 'DB/SUBSCRIBE',
  cancelType: 'DB/CANCEL_SUBSCRIPTION',
  processOptions: {
    failType: 'DB/SUBSCRIPTION_ERROR',
  },
  transform({getState, action}, next) {
    let {user} = getState();
    let agent = user.currentUser;
    let nextAction = {
      type: action.type,
      payload: {
        subject: action.payload,
      },
      meta: {
        agent: agent.uid,
        db: firebase.database().ref(agent.uid),
      },
    };
    next(nextAction);
  },
  process({action}, dispatch, done) {
    let {subject} = action.payload;
    let {db} = action.meta;
    subject.map(subjectPath => {
      let resource = db.child(subjectPath);
      dispatch(subscriptionActive(subjectPath));
      resource.on('value', nextState => {
        dispatch({
          type: 'DB/SUBSCRIPTION_UPDATED',
          payload: {
            subject: subjectPath,
            value: nextState.val(),
          },
        });
      });
    });
  },
});

const subscriptionActiveLogic = createLogic({
  type: 'DB/SUBSCRIPTION_ACTIVE',
  transform({action}, next) {
    next({
      type: action.type,
      payload: {
        subject: action.payload,
      },
    });
  },
});

export const searchLogic = createLogic({
  type: 'SEARCH_VALUE',
  latest: true,
  transform({getState, action}, next) {
    action.meta = {
      searchValue: action.payload,
      instrument: 'searchLogic',
      source: getState().schema.types,
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
        id: item.id,
        title: lit(item.label),
        description: lit(item.description),
      }));
      dispatch({
        type: 'SEARCH_RESULT',
        payload: searchResults,
        meta: action.meta,
      });
    }
    dispatch({type: 'SEARCH_LOADING', payload: false, meta: action.meta});
    done();
  },
});

const saveGraph = createLogic({
  type: 'DB/SAVE_GRAPH',
  process({action}, dispatch, done) {
    done();
  },
});

type NamedNode = {
  termType: 'NamedNode',
  value: string,
};

type Literal = {
  termType: 'Literal',
  value: string,
  datatype: NamedNodeMap,
  lang: string,
};

type SaveJsonObjectAction = {
  payload: {
    id: string,
    type: string,
    label: Array<Literal>,
    description: Array<Literal>,
    subClassOf: Array<NamedNode>,
  },
};

const saveJsonObject = createLogic({
  type: 'DB/SAVE_JSON_OBJECT',
  processOptions: {
    successType: 'DB/SAVE_JSON_OBJECT_SUCCESS',
    failType: 'DB/SAVE_JSON_OBJECT_FAIL',
  },
  transform({action}, next) {
    let nextPayload = mapValues(action.payload, value => {
      if (isArray(value)) {
        return value.length === 1
          ? shrinkRdfNode(value[0])
          : value.map(item => shrinkRdfNode(item));
      }
      return shrinkRdfNode(value);
    });
    next({...action, payload: nextPayload});
  },
  process({action}) {
    return action.payload;
  },
});

export default [
  subscribeLogic,
  subscriptionActiveLogic,
  searchLogic,
  saveJsonObject,
];
