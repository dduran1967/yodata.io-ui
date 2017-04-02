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
import {dbLogic, dbReducer} from '../db'
import {reactionReducer} from '../reaction/reactionLogic.js'
import router from '../router'
import {schemaLogic, schemaReducer} from '../schema'
import {userLogic, userReducer} from '../user'

const composeEnhancers = composeWithDevTools({})

const rootReducer = combineForms({
  router:   router5Reducer,
  schema:   schemaReducer,
  drawer:   drawerReducer,
  reaction: reactionReducer,
  user:     userReducer,
  loading:  loadingReducer,
  channel:  channelReducer,
  db:       dbReducer,
  search:   searchReducer
});

const logicMiddleware = createLogicMiddleware([
  ...schemaLogic,
  ...userLogic,
  ...channelLogic,
  ...dbLogic
]);

const enhancers = composeEnhancers(applyMiddleware(
  logger(),
  router5Middleware(router),
  logicMiddleware,
))

const initialState = {}
const store = createStore(rootReducer, initialState, enhancers)
export default store

root.store = store
