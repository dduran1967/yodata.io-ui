// @flow

import React from 'react';
import {Header} from 'semantic-ui-react';

const SplitHeader = ({icon, content, subheader, children}) => {
  const splitHeaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'top',
    paddingTop: '1em',
    paddingBottom: '1em',
  };
  return (
    <div style={splitHeaderStyle}>
      <Header {...{icon, content, subheader}} />
      <div>{children}</div>
    </div>
  );
};

export default SplitHeader;
