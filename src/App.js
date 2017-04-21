// @flow
import React from 'react'
import {compose} from 'recompose'
import {Container, Sidebar} from 'semantic-ui-react'
import './style/App.css'
import Appbar from './component/Appbar'
import LeftSidebar from './component/Sidebar'
import ViewSelector from './router/ViewSelector'
import store from './store'
import UserButton from './user/UserButton.js'
import {connect} from 'react-redux'
import Notifications from './component/Notifications.js'

const config = {
  appbar: {
    fixed: 'top',
    items: [
      {
        key: 'toggle',
        icon: 'bars',
        onClick: () => store.dispatch({type: '@@Appbar/TOGGLE_NAV'}),
      },
      {
        key: 'brand',
        content: <strong>Yodata</strong>,
        header: true,
      },
      {
        key: 'account',
        position: 'right',
        content: <UserButton />,
      },
    ],
  },
};

const App = props => {
  if (props.user.signedIn === false) {
    location.assign('/widget.html');
    return <div />;
  }
  return (
    <div>
      <Container fluid style={{height: '100vh'}}>
        <Sidebar.Pushable>
          <LeftSidebar />
          <Sidebar.Pusher>
            <Appbar {...config.appbar} />
            <div className="ui container" style={{paddingTop: '66px'}}>
              <ViewSelector />
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
      <Notifications/>
    </div>
  );
};

export default compose(
  connect(
    state => ({
      user: state.user,
    }),
  ),
)(App);
