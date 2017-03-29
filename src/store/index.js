// @flow

import {combineForms} from 'react-redux-form'
import {applyMiddleware, compose, createStore} from 'redux'
import logger from 'redux-logger'
import {createLogicMiddleware} from 'redux-logic'
import {router5Middleware, router5Reducer} from 'redux-router5'
import root from 'window-or-global'
import {drawerReducer} from '../component/Drawer.js'
import {loadingReducer} from '../component/Loading'
import {reactionReducer} from '../reaction/reactionLogic.js'
import router from '../router'
import {schemaLogic, schemaReducer} from '../schema'
import {streamLogic, streamReducer} from '../stream'
import {userLogic, userReducer} from '../user'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineForms({
  router:   router5Reducer,
  stream:   streamReducer,
  schema:   schemaReducer,
  drawer:   drawerReducer,
  reaction: reactionReducer,
  user:     userReducer,
  loading:  loadingReducer
});

const logicMiddleware = createLogicMiddleware([
  ...streamLogic,
  ...schemaLogic,
  ...userLogic
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
