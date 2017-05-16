import React from 'react';
import { compose, getContext, withContext, withState } from 'recompose';
import { Menu, MenuItem } from 'semantic-ui-react';
import PropType from 'prop-types';

const TabGroup = compose(
  withState('activeTab', 'setActiveTab', props => {
    return props.defaultTab ? props.defaultTab : props.items && props.items[0];
  }),
  withContext(
    {
      activeTab: PropType.string
    },
    props => ({ activeTab: props.activeTab })
  )
)(props => {
  let items = props.items || [];
  let menuItems = items.map(item => (
    <MenuItem
      key={item}
      name={item}
      onClick={() => props.setActiveTab(item)}
      active={props.activeTab && props.activeTab === item}
    />
  ));
  return (
    <div className="TabGroup">
      <Menu tabular>
        {menuItems}
      </Menu>
      {props.children}
    </div>
  );
});

export const TabGroupItem = getContext({
  activeTab: PropType.string
})(props => {
  let name = props.name;
  let activeTab = props.activeTab;
  if (name && activeTab && activeTab === name) {
    return <div>{props.children}</div>;
  }
  return null;
});

export default TabGroup;
