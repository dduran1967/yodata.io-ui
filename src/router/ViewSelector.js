import React from 'react'
import {Debug} from '../component'
import {routeMap} from './routes.js'
import withRoute from './withRoute'

const ViewSelector = props => {
  if (props.route) {
    let {name} = props.route
    let view = routeMap[name] || {component: Debug}
    return React.createElement(view.component, props);
  }
  return Debug(props)
}

export default withRoute(ViewSelector);