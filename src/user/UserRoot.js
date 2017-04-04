import React from 'react'
import {Header, Section} from '../component'
import withUser from './withUser'


export const UserRootView = ({user, dispatch, fetchProfile, ...props}) => (
  <div className="ui grid">
    <Section>
      <Header>User Authentication</Header>
      <p>The easiest way to authenticate API access with firebase auth is with the firebase client package.</p>

      <p><a href="https://firebase.google.com/docs/auth/web/password-auth">Firebase Password Authentication with
        Javascript Documentation and client downloads</a></p>

      <p>You will need an API key, contact <a href="mailto:dave@yodata.io">dave@yodata.io</a> to get one.</p>
    </Section>
  </div>
)

export default withUser(UserRootView);
