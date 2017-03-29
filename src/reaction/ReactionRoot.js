import React from 'react'
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
