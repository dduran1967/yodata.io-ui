// @flow

import 'codemirror/lib/codemirror.css'

import React from 'react'
import {compose, lifecycle} from 'recompose'
import {Container, Segment, Sidebar} from 'semantic-ui-react'

import './App.css'
import {PageHeader, withDrawer, withUser} from './component'
import LeftSidebar from './component/Sidebar'
import {withRoute} from './router'
import ViewSelector from './router/ViewSelector'
import './style/semantic.css'

const App = props => {
  if (props.user.signedIn === false) {
    location.assign('/widget.html');
    return (<div></div>)
  }
  return (
    <div>
      <Container fluid style={{height: '100vh'}}>
        <PageHeader title={props.route.name}/>
        <Sidebar.Pushable as={Segment}>
          <LeftSidebar />
          <Sidebar.Pusher>
            <div className="ui container" style={{paddingTop: '66px'}}>
              <ViewSelector />
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
    </div>
  )
}

export default compose(
  withDrawer,
  withRoute,
  withUser,
)(App)

