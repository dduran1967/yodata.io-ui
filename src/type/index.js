import {observer} from 'mobx-react'
// @flow
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import TypeView from '../action/ActionView'
import {PageHeader} from '../component'
import {lit, sym} from '../lib/rdf-utilities'
import TypeListView from './type.list.view'


class TypeViewController extends React.Component {
  render() {
    const {store, ui} = this.props;
    let subject = store.currentSubject;

    let headerConfig = {
      title:       subject ? lit(subject.label) : 'Actions',
      onNavToggle: ui.sidebar.open ? undefined : ui.toggleSidebar,
      onBack:      undefined
    };

    if (subject) {
      headerConfig.onBack = () => {
        store.setCurrentSubject(null);
        history.back();
      }
    }
    return (
      <div>
        <PageHeader {...headerConfig}/>
        <Switch>
          <Route path="/type/view/"
                 component={TypeView}
                 subject={store.currentSubject}
                 listPath="/type/"
                 onClose={() => store.setCurrentSubject()}
          />
          <Route component={TypeListView}
                 listItems={store.ready ? store.types : []}
                 linkTo={'/type/view/'}
                 onLink={(v) => store.setCurrentSubject(sym(v))}
          />
        </Switch>
      </div>
    )
  }
}

export default observer(TypeViewController);
