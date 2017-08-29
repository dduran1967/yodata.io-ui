// @flow

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from 'redux-logic';
import { router5Middleware, router5Reducer } from 'redux-router5';
import { channelLogic, channelReducer } from '../channel';
import { drawerReducer } from '../component/Drawer.js';
import { loadingReducer } from '../component/Loading';
import { searchReducer } from '../services/search_service';
import router from '../router';
import { schemaLogic, schemaReducer } from '../schema';
import thrumeLogic from '../thrume/thrume-logic';
import thrumeReducer from '../thrume/thrume-reducer';
import { userLogic, userReducer } from '../user';
import dbReducer from '../db/dbReducer';
import dbLogic from '../db/dbLogic';
import { notificiationsReducer } from '../component/Notifications.js';
import reactionReducer from '../reaction/reactionReducer.js';
import reactionLogic from '../reaction/reactionLogic.js';
import { getAction } from '../services/action_service.js';
import { exampleReducer } from '../services/exampleService'
import root from 'window-or-global';

const REDUCERS = {
  user: userReducer,
  router: router5Reducer,
  db: dbReducer,
  schema: schemaReducer,
  loading: loadingReducer,
  drawer: drawerReducer,
  channel: channelReducer,
  search: searchReducer,
  thrume: thrumeReducer,
  notifications: notificiationsReducer,
  reactions: reactionReducer,
  example: exampleReducer
};

const ROOT_REDUCER = combineReducers(REDUCERS);

const LOGIC_MIDDLEWARES = [
  ...userLogic,
  ...dbLogic,
  ...schemaLogic,
  ...channelLogic,
  ...thrumeLogic,
  ...reactionLogic
];

const LOGIC_DEPENDENCIES = {
  firebase: root.firebase,
  db: root.firebase && root.firebase.database,
  auth: root.firebase && root.firebase.auth,
  getAction
};

const LOGIC = createLogicMiddleware(LOGIC_MIDDLEWARES, LOGIC_DEPENDENCIES);

const ENHANCERS = composeWithDevTools({})(
  applyMiddleware(LOGIC, router5Middleware(router))
);

const store = createStore(ROOT_REDUCER, void 0, ENHANCERS);

const INJECT_REDUCERS = {};

export const addReducerToStore = (name: string, reducer: Reducer) => {
  INJECT_REDUCERS[name] = reducer;
  let nextReducer = combineReducers({ ...REDUCERS, ...INJECT_REDUCERS });
  store.replaceReducer(nextReducer);
};

export default store;
