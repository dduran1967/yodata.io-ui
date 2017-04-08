// @flow

import React from 'react';
import {Header} from 'semantic-ui-react';

class SectionHeader extends React.Component {
  props: {
    icon: string,
    content: string,
    subheader: string,
    children: React.Component,
  };
  static defaultProps = {
    content: '',
  };
  render() {
    let {icon, content, subheader, children} = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'top',
          paddingTop: '1em',
          paddingBottom: '1em',
        }}
      >
        <Header {...{icon, content, subheader}} />
        <div>{children}</div>
      </div>
    );
  }
}

export default SectionHeader;
