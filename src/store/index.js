// @flow

import {combineForms} from 'react-redux-form'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'
import {createLogicMiddleware} from 'redux-logic'
import {router5Middleware, router5Reducer} from 'redux-router5'
import root from 'window-or-global'
import {channelLogic, channelReducer} from '../channel'
import {drawerReducer} from '../component/Drawer.js'
import {loadingReducer} from '../component/Loading'
import {searchReducer} from '../services/search_service'
import router from '../router'
import {schemaLogic, schemaReducer} from '../schema'
import thrumeLogic from '../thrume/thrume-logic'
import thrumeReducer from '../thrume/thrume-reducer'
import {userLogic, userReducer} from '../user'
import dbReducer from '../db/dbReducer'
import dbLogic from '../db/dbLogic'
import {notificiationsReducer} from '../component/Notifications.js'
import reactionReducer from '../reaction/reactionReducer.js'
import reactionLogic from '../reaction/reactionLogic.js'
import {getAction} from '../services/action_service.js'

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
  reactions: reactionReducer,
});

const logicDependencies = {
  firebase: window.firebase,
  db: window.firebase.database,
  auth: window.firebase.auth,
  getAction
}

const logicMiddleware = createLogicMiddleware([
  ...userLogic,
  ...dbLogic,
  ...schemaLogic,
  ...channelLogic,
  ...thrumeLogic,
  ...reactionLogic
], logicDependencies);

const enhancers = composeEnhancers(
  applyMiddleware(logicMiddleware, router5Middleware(router), createLogger()),
);

const initialState = {};
const store = createStore(rootReducer, initialState, enhancers);

export default store;

root.store = store;
