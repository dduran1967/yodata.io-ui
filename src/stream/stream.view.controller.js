// @flow
import React from 'react';
import {observer} from 'mobx-react';
import {PageHeader, Link, List} from '../component';
import {Switch, Route} from 'react-router-dom';
import StreamView from '../stream/stream.view';

class StreamViewController extends React.Component {

  render() {
    console.log('StreamViewController',this);
    let {store} = this.props;
    let {sidebar, toggleSidebar} = store.ui;
    let streams = store.streams;
    let currentStream = streams.currentStream;
    let headerConfig = {
      title:           currentStream ? currentStream.name : 'Streams',
      onNavToggle:     !sidebar.open ? toggleSidebar : undefined
    };
    return (
      <div>
        <PageHeader {...headerConfig}/>
        <div className="breadcrumb">
          <Link to={'/stream/'} className="breadcrumb-item">{location.pathname}</Link>
        </div>
        <main className="p-3">
          <Switch>
            <Route
              path={"/stream/:name"}
              component={StreamView}
              stream={streams.currentStream}
            />
            <Route
              component={List}
              listItems={streams.values().map(v=>({
                id:     v.name,
                label:  v.name,
                linkTo: '/stream/' + v.name,
                onClick: (id)=>streams.currentStream = streams.get(id)
              }))}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default observer(StreamViewController);
