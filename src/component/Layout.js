// @flow

import React from 'react';
import { Container, Sidebar } from 'semantic-ui-react';
import Appbar from './Appbar';
import LeftSidebar from './Sidebar';
import Notifications from './Notifications';

const Layout = props => (
  <div className="layout">
    <Container fluid style={{ height: '100vh' }}>
      <Sidebar.Pushable>
        <LeftSidebar />
        <Sidebar.Pusher>
          <Appbar />
          <div className="ui container">
            {props.children}
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Container>
    <Notifications />
  </div>
);

export default Layout;
