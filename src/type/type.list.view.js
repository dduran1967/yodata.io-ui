import React from 'react';
import List from '../component/List';

const TypeListView = ({listItems, linkTo, onLink}) =>
  <div className="TypeListView">
    <div className="list-group">
      <List
        listItems={listItems}
        linkTo="/type/view/"
        onLink={onLink}
      />
    </div>
  </div>

export default TypeListView;
