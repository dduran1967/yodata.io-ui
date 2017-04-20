// @flow

import React from 'react';
import {CardGroup, Card} from 'semantic-ui-react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const AnimatedCardGroup = (
  {items = [], ...groupSettings}: {items: Array<Card>, groupSettings: Object},
) => {
  let cards = items.map(itemContent => <Card {...itemContent} />);
  let transitionSettings = {
    transitionName: 'card',
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300,
  };
  return (
    <CardGroup {...groupSettings}>
      <CSSTransitionGroup {...transitionSettings}>{cards}</CSSTransitionGroup>
    </CardGroup>
  );
};

export default AnimatedCardGroup;
