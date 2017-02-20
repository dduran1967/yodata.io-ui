import React from 'react';
import {observer} from 'mobx-react';
import store from './store';
import typeStore from './type/typeStore';
import DevTools from 'mobx-react-devtools';
import {Route, Switch} from 'react-router-dom';
import TypeViewController from './type';
import Sidebar from './view/sidebar.view';
import styleConfig from './style/config';
import './style/index.scss';
import 'codemirror/lib/codemirror.css';
import ActionViewController from './action';
import StreamViewController from './stream/stream.view.controller';
import HomeView from './view/home.view';

// autorun componnts
require('./lib/solid-streams');
require('./component/Collection');

class App extends React.Component {
  static childContextTypes = {
    rebass: React.PropTypes.object
  };

  getChildContext() {
    return {
      rebass: {...styleConfig}
    }
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-row">
          <Sidebar open={store.ui.sidebar.open} toggleSidebar={store.ui.toggleSidebar}/>
          <div id="contentWrapper" className="w-100">
            <main id="mainContent">
              <Switch>
                <Route path={"/stream"} component={StreamViewController} store={store}/>
                <Route path={"/action"} component={ActionViewController} store={store}/>
                <Route path={"/type"} component={TypeViewController} store={typeStore} ui={store.ui}/>
                {/*<Route path={"/connect/:clientId"} component={ConnectClientView}/>*/}
                {/*<Route path={"/connect"} component={ConnectView}/>*/}
                {/*<Route path={"/events"} component={MessagesView}/>*/}
                {/*<Route path="/messages/:messageId" component={MessageView}/>*/}
                <Route path={"/"} component={HomeView} ui={store.ui}/>
              </Switch>
            </main>
          </div>
        </div>
        <DevTools/>
      </div>
    )
  }
}

export default observer(App);
