import React from 'react'
import {Provider} from 'react-redux'
import {RouterProvider} from 'react-router5'
import ReactDOM from 'react-dom'
import App from './App'
import router from './router'
import store from './store'
import './actions/index';
import './schema/schema_graph'


const app = (
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);

router.start((err,state) => {
  ReactDOM.render(app, document.getElementById("root"));
});
