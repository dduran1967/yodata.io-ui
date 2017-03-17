import React from 'react'
import {connect} from 'react-redux'
import {routeNodeSelector, actions as routerActions} from 'redux-router5'
import {bindActionCreators} from 'redux'
import PageHeader from '../component/PageHeader'
import ActionList from './ActionList'
import ActionView from './ActionView'
import typeStore from '../store/type.store'

const ActionViewController = ({route, router, navigateTo}) => {
  return (
    <div>
      <PageHeader title="Actions"/>
      { route.name === 'action.list' ?
        <ActionList actions={typeStore.actions}
                    onSelect={(action) => {navigateTo('action.view',{id:action.id})}}/> : null }
      { route.name === 'action.view' ?
        <ActionView id={route.params.id} navigateTo={navigateTo} /> : null }
    </div>
  )
}

const selector = routeNodeSelector('action');

export default connect(
  state => ({
    schema: state.schema,
    ...selector(state)
  }),
  dispatch => bindActionCreators({
    navigateTo: routerActions.navigateTo
  }, dispatch)
)(ActionViewController);