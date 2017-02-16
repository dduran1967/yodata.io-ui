// @flow
import React from 'react';
import ActionView from './action.view';
import CodeView from '../type/code.view';
import {Route, Switch} from 'react-router-dom';
import {observer} from 'mobx-react';
import {lit} from '../lib/rdf-utilities';
import {PageHeader, Link, List} from '../component';


class ActionViewController extends React.Component {

  render() {
    let {store} = this.props;
    let {ui, typeStore} = store;

    let subject = typeStore.ready && typeStore.currentSubject;
    let headerConfig = {
      title:       subject ? lit(subject.label) : 'Actions',
      onNavToggle: !ui.sidebar.open ? ui.toggleSidebar : undefined,
      onBack:      undefined
    };

    if (subject) {
      headerConfig.onBack = () => {
        store.setCurrentSubject(null);
      }
    }
    return (
      <div>

        <PageHeader {...headerConfig}/>

        {subject &&
        <div className="breadcrumb">
          {subject.superTypes.map(({id, label}) =>
            <Link
              key={id}
              to={"/type/view/#" + id}
              className="breadcrumb-item">
              {lit(label)}
            </Link>
          )}
        </div>
        }

        <Switch>
          <Route path="/action/code/"
                 component={CodeView}
                 subject={subject}
                 store={store}
          />
          <Route path="/action/view/"
                 component={ActionView}
                 subject={subject}
          />
          <Route
            component={List}
            listItems={typeStore.actions.map(type=>({
              key: type.id,
              id:     type.id,
              label:  type.label,
              description: type.description,
              linkTo: '/action/view/#' + type.id,
              onClick: console.log
            }))}
          />
        </Switch>
      </div>
    )
  }
}

export default observer(ActionViewController);