import React from 'react';
import {style} from 'typestyle';
import {em} from 'csx';

const buttonStyle = style({
  border: 'solid 1px red',
  padding: em(1)
})

export default props => <button className={buttonStyle}>{props.children}</button>