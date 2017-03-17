import React, {createElement} from 'react'
import {connect} from 'react-redux'
import {routeNodeSelector} from 'redux-router5'
import {routeMap} from '../router/routes.js'
import NotFound from './NotFound'

const ViewSelector = props => {
  const { route } = props;
  let routeName = route.name.split('.')[0];
  let found = routeMap[routeName];
  let view = found ? found.component : NotFound;
  return createElement(view, {...props});
}

export default connect(state => routeNodeSelector(''))(ViewSelector)