import 'codemirror/lib/codemirror.css'

import React from 'react'
import {compose} from 'recompose'
import {Container, Segment, Sidebar} from 'semantic-ui-react'

import './actions/index'
import './App.css'
import {PageHeader, withDrawer, withUser} from './component'
import LeftSidebar from './component/Sidebar'
import {withRoute} from './router'
import ViewSelector from './router/ViewSelector'
import './style/semantic.css'

const App = props => {
  if (props.user.signedOut) {
    location.assign('/widget.html');
    return (<div></div>)
  }
  return (
    <div>
      <Container fluid style={{height: '100vh'}}>
        <Sidebar.Pushable as={Segment}>
          <LeftSidebar />
          <Sidebar.Pusher>
            <PageHeader title={props.route.name}/>
            <Container style={{paddingTop: '66px'}}>
              <ViewSelector />
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
    </div>
  )
}


export default compose(
  withDrawer,
  withRoute,
  withUser
)(App)

