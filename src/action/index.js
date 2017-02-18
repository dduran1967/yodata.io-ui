// @flow

import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ActionView from './action.view'
import ActionListView from './action.list.view'
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
            component={ActionListView}
            ready={typeStore.ready}
            listItems={typeStore.actions.map(type=>({
              key:         type.id,
              id:          type.id,
              label:       type.label,
              description: type.description,
              linkTo:      '/action/view/#' + type.id
            }))}
          />
        </Switch>
      </div>
    )
  }
}

export default observer(ActionViewController);
