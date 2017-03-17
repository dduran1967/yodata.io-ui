import React from 'react'
import {connect} from 'react-redux'
import {routeNodeSelector} from 'redux-router5'
import ActionList from './ActionList'

function Actions(props) {
  const {route} = props;
  return (
    <div className="actions">
      <ActionList router={router}/>
    </div>
  )

}

export default connect(state => {
  const selector = routeNodeSelector('action');
  return (state) => ({
    types: state.types,
    ...selector
  })
})(Actions);
