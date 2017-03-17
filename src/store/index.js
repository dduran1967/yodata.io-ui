import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {router5Middleware, router5Reducer} from 'redux-router5'
import {createLogicMiddleware} from 'redux-logic'
import logger from 'redux-logger'
import router from '../router'
import streamReducer from '../stream/stream_reducer'
import {drawerReducer} from '../component/Drawer.js'
import {schemaLogic, schemaReducer} from '../schema'
import {streamLogic} from '../stream/stream_logic'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  router: router5Reducer,
  stream: streamReducer,
  schema: schemaReducer,
  drawer: drawerReducer
});

const logicMiddleware = createLogicMiddleware([
  ...streamLogic,
  ...schemaLogic]);

const enhancers = composeEnhancers(applyMiddleware(
  logger(),
  router5Middleware(router),
  logicMiddleware,
))

const initialState = {};
const store = createStore(rootReducer, initialState, enhancers);
window.store = store;
export default store;
