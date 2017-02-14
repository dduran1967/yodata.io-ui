import React from 'react';
import List from '../component/List';

const DocumentListView = ({listItems, linkTo, onLink, ...props}) =>
  <div>
    <List
      listItems={listItems}
      linkTo={linkTo}
      onLink={onLink}
    />
  </div>

export default DocumentListView;