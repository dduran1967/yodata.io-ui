// @flow

import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {lit} from '../lib/rdf-utilities'
import {PageHeader, Link, List} from '../component'
import ActionView from './action.view'
import {observer} from 'mobx-react'

class ActionViewController extends React.Component {
  render() {
    let {typeStore} = this.props.store;
    return (
      <div>
        <Switch>
          <Route path="/action/view/"
                 component={ActionView}
                 store={this.props.store}
          />
          <Route
            component={List}
            listItems={typeStore.actions.map(type=>({
              key:         type.id,
              id:          type.id,
              label:       type.label,
              description: type.description,
              linkTo:      '/action/view/#' + type.id,
              onClick:     (id) => typeStore.setCurrentSubject(id)
            }))}
          />
        </Switch>
      </div>
    )
  }
}

export default observer(ActionViewController);
