
// @flow

import React from 'react'
import List from '../component/List'
import type {Thing} from '../models/Thing.js';


export default function ActionList(props: {actions: Array<Thing>, onSelect: ()=> void }) {
  const listItems = props.actions.map((action: Thing) => ({
    key:         action.id,
    id:          action.id,
    label:       action.label,
    description: action.description,
    onClick:      (action) => props.onSelect(action)
  }))
  return <List listItems={listItems}/>
}
