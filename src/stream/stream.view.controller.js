// @flow
import React from 'react';
import {observer} from 'mobx-react';
import {PageHeader, Link, List} from '../component';
import {Switch, Route} from 'react-router-dom';
import StreamView from '../stream/stream.view';

class StreamViewController extends React.Component {

  render() {
    let {store} = this.props;
    let {sidebar, toggleSidebar} = store.ui;
    let streams = store.streams;
    let headerConfig = {
      title: 'Streams',
      onNavToggle: !sidebar.open
        ? toggleSidebar
        : undefined
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
              path={"/stream/:streamName"}
              component={StreamView}
              store={store}
            />
            <Route component={List} listItems={streams.items.map(v => ({
              id: v.name,
              label: v.name,
              linkTo: '/stream/' + v.name,
            }))}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default observer(StreamViewController);
