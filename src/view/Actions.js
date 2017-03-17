import React from 'react'
import {connect} from 'react-redux'
import {routeNodeSelector} from 'redux-router5'
import ActionList from '../action/ActionList'
import ActionView from '../action/ActionView'

function Actions(props) {
  const {route} = props;

  switch (route.name) {
    case 'action.list':
      return <ActionList />
    case 'action.view':
      return <ActionView id={route.params.id}/>
    default:
      return <div><h1>not found</h1></div>
  }

}

export default connect(state => {
  const selector = routeNodeSelector('action');
  return (state) => ({
    types: state.types,
    ...selector
  })
})(Actions);
