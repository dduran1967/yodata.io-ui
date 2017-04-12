import React from 'react';
import {compose, withProps} from 'recompose';
import {lit} from '../lib/rdf-utilities';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const enhance = compose(
  withProps(({items, handleClick}) => ({
    items: items.map(item => ({
      header: lit(item.label),
      description: lit(item.description).replace(/<\/?[^>]+(>|$)/g, ''),
      id: item.id,
      key: item.id,
      onClick: handleClick,
    })),
  })),
);

const AnimatedCardGroup = ({items = [], ...groupSettings}) => {
  let cards = items.map(item => (
    <a
      key={item.key}
      className="ui card"
      onClick={e => groupSettings.handleClick(e, item)}
    >
      <div className="content" style={{overflow: 'hidden'}}>
        <div className="header">{item.header}</div>
        <div className="description">{item.description}</div>
      </div>
    </a>
  ));
  let transitionSettings = {
    transitionName: 'fadeup',
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300,
  };
  return (
    <CSSTransitionGroup {...transitionSettings} className="ui three cards">
      {cards}
    </CSSTransitionGroup>
  );
};

export default enhance(AnimatedCardGroup);
