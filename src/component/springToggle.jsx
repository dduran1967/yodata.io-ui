import React from 'react';
import {Motion, spring} from 'react-motion';

type SpringToggleParams = {
  open: boolean,
  size: number,
};

const SpringToggle = (
  {
    open = false,
    size = 300,
    direction = 'down',
    children,
  }: SpringToggleParams,
) => {
  return (
    <Motion
      style={
        open
          ? {s: spring(size, {stiffness: 200, damping: 15})}
          : {s: spring(0, {stiffness: 170, damping: 20})}
      }
    >
      {val => (
        <div style={{height: val.s, overflow: 'auto'}}>
          {children}
        </div>
      )}
    </Motion>
  );
};

export default SpringToggle;
