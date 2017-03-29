import React from 'react'
import List from '../component/List'

function ActionList({actions = [], onSelect}) {
  const listItems = actions.map(action => ({
    key:         action.id,
    id:          action.id,
    label:       action.label,
    description: action.description,
    onClick:      (action) => onSelect(action)
  }))
  return <List listItems={listItems}/>
}

export default ActionList;
