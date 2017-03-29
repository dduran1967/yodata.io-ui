import React from 'react'
import {Debug} from '../component'
import withUser from './withUser'

export const UserRootView = ({user, dispatch, fetchProfile, ...props}) => (
  <div>
    <Debug {...{user}}/>
  </div>
)

export default withUser(UserRootView);
