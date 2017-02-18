import React from 'react';
import List from '../component/List';
import PageHeader from '../component/PageHeader'

const ActionListView = ({listItems, ...props}) => {
  return (
    <div>
      <PageHeader title="Actions" />
      <List
        listItems={listItems}
      />
    </div>
  )
}

export default ActionListView;
