import React, {PropTypes} from 'react';
import {compose, defaultProps, setPropTypes} from 'recompose';

export const svgContainer = compose(
  defaultProps({
    xmlns:   'http://www.w3.org/2000/svg',
    fill:    'currentColor',
    name:    'blank',
    width:   '24px',
    height:  '24px',
    viewBox: '0 0 24 24'
  }),
  setPropTypes({
    color:     PropTypes.string,
    height:    PropTypes.string,
    path:      PropTypes.string,
    width:     PropTypes.string,
    viewBox:   PropTypes.string,
    xmlns:     PropTypes.string,
    className: React.PropTypes.string,
  })
)

const Svg = props => (
  <svg>{props.children}</svg>
)

export default Svg
