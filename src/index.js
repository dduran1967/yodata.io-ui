// @flow
// import '../firebase_start'
import store from './store'
import router from './router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import App from './App'
import './yo'
import { HotKeys } from 'react-hotkeys'

const keyMap = {
  'controlF': 'ctrl+f',
}

const hotKeyHandlers = {
  'controlF': event => {
    window.document.getElementById('app_search').focus();
  }
}

const app = (
  <Provider store={store}>
    <RouterProvider router={router}>
      <HotKeys keyMap={keyMap} handlers={hotKeyHandlers}>
        <App />
      </HotKeys>
    </RouterProvider>
  </Provider>
);

router.start((err, state) => {
  ReactDOM.render(app, document.getElementById('app'));
});
