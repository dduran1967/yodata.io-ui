// @flow
import React from 'react'
import {actions as routerActions} from 'redux-router5';
import { Icon, Dropdown, Menu} from 'semantic-ui-react'
import {compose, withProps, withHandlers, branch, renderComponent} from 'recompose';
import withUser from './withUser';
import withRoute from '../router/withRoute.js';

const UserButton = ({user, signOut, ...props}) =>
  <div>
    {user &&
    <Dropdown item icon="dropdown" text={user.displayName} simple>
      <Dropdown.Menu>
        <Dropdown.Item onClick={()=> signOut()}>
          <Icon name="sign out"/>
          logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    }
  </div>

const SignUpButton = props =>
  <div>
    <button className="ui button item" onClick={props.signup}>Signup</button>
  </div>

const UserButtonUI = compose(
  withUser,
  withRoute,
  withProps(props => ({
    user: props.user.currentUser,
    signOut: props.signOut
  })),
  withHandlers({
    signup:   () => () => routerActions.navigateTo('signup')
  }),
  branch(
    ({user}) => (user),
    renderComponent(UserButton)
  )
)(SignUpButton)

export default UserButtonUI


