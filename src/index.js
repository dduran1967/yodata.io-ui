import * as firebase from 'firebase'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {RouterProvider} from 'react-router5'
import App from './App'
import router from './router'
import './schema/schemaGraph'
import store from './store'
window.firebase = firebase;

const config = {
  apiKey:            "AIzaSyAuLfAq8F2ibOTuMe3Ql7UmwGWHEXHqkiU",
  authDomain:        "yodata-1115.firebaseapp.com",
  databaseURL:       "https://yodata-1115.firebaseio.com",
  storageBucket:     "yodata-1115.appspot.com",
  messagingSenderId: "776960890496"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function (user, credentials, redirectUrl) {
  if (user) {
    store.dispatch({type: 'USER/USER_SIGNED_IN', payload: user})
  } else {
    store.dispatch({type: 'USER/USER_SIGNED_OUT'})
  }
})

const app = (
  <Provider store={store} firebase={firebase}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
)

router.start((err, state) => {
  ReactDOM.render(app, document.getElementById("app"))
})








