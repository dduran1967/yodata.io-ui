import React from 'react'
import {actions as routerActions} from 'redux-router5'
import {MediaList} from '../component'
import {withReactions} from './withReactions'

const ReactionList = ({reaction: {items = []}, dispatch}) => (
  <div>
    <h3>todo</h3>
    <ul>
      <li>wire action sandbox UI to firebase</li>
    </ul>
  </div>
)

export default withReactions(ReactionList);
