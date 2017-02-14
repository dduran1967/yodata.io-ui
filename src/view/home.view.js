import React from 'react';
import {observer} from 'mobx-react';
import PageHeader from '../component/PageHeader';
import solid from 'solid-client';

window.solid = solid;

class Home extends React.Component {
  render() {
    let ui = this.props.ui;
    let headerConfig = {
      title:       'Home',
      onNavToggle: ui.sidebar.open ? undefined : ui.toggleSidebar
    }
    return (
      <div>
        <PageHeader
          {...headerConfig}
        />
      </div>
    )
  }
}

export default observer(Home);
