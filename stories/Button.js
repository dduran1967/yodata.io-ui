import React from 'react';
import {style}  from 'typestyle';
import * as csx from 'csx';

const buttonStyles = style({
  border: 'solid 1px #eee',
  borderRadius: 3,
  backgroundColor: csx.red,
  color: csx.white,
  padding: csx.em(.5),
  margin: csx.em(.5)
})

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
