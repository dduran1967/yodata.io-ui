// @flow

import React from 'react';
import {CardGroup, Card} from 'semantic-ui-react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './CardGroup.css';
import Debug from '../Debug';
const AnimatedCardGroup = ({items = [], ...groupSettings}) => {
  let cards = items.map(itemContent => <Card {...itemContent} />);
  let transitionSettings = {
    transitionName: 'card',
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300,
  };
  return (
    <div>
      <CardGroup {...groupSettings}>
        <CSSTransitionGroup {...transitionSettings}>{cards}</CSSTransitionGroup>
      </CardGroup>
    </div>
  );
};

export default AnimatedCardGroup;
