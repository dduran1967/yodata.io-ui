// @flow

import {combineForms} from 'react-redux-form'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import {createLogicMiddleware} from 'redux-logic'
import {router5Middleware, router5Reducer} from 'redux-router5'
import root from 'window-or-global'
import {channelLogic, channelReducer} from '../channel'
import {drawerReducer} from '../component/Drawer.js'
import {loadingReducer} from '../component/Loading'
import {searchReducer} from '../component/searchInterface.js'
import router from '../router'
import {schemaLogic, schemaReducer} from '../schema'
import thrumeLogic from '../thrume/thrume-logic'
import thrumeReducer from '../thrume/thrume-reducer'
import {userLogic, userReducer} from '../user'
import dbReducer from '../db/dbReducer'
import dbLogic from '../db/dbLogic'
import {notificiationsReducer} from '../component/Notifications.js'

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineForms({
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
});

const logicMiddleware = createLogicMiddleware([
  ...userLogic,
  ...dbLogic,
  ...schemaLogic,
  ...channelLogic,
  ...thrumeLogic
]);

const enhancers = composeEnhancers(
  applyMiddleware(logicMiddleware, router5Middleware(router), logger()),
);

const initialState = {};
const store = createStore(rootReducer, initialState, enhancers);

export default store;

root.store = store;
