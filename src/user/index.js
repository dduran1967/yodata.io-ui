import React from 'react'
import {withUser as _withUser} from './withUser'
import Debug from '../component/Debug'

/**
 * Views
 */
export const User = _withUser(Debug);
export const UserProfile = _withUser(Debug);
export const withUser = _withUser;

export default User;