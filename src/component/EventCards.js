// @flow

import type {Resource} from '../../flowtypes.flow';
import React from 'react';
import {compose, withHandlers, withState, withProps} from 'recompose';
import BaseCard from './BaseCard';
import {withLoader} from './Loading';

export const EventCard = compose(
  withLoader(props => {
    return !props.data;
  }),
  withState('open', 'set_open', false),
  withState('show', 'setShow', {
    open: false,
    example: true,
  }),
  withProps(({id, data}) => ({
    meta: `${data.type}`,
    json: data
  })),
  withHandlers({
    toggle: props =>
      event => {
        let open = !props.open;
        props.set_open(open);
      },
  }),
)(BaseCard);

export const EventCards = ({items = []}: {items: Array<Resource>}) => (
  <div>
    {items.map(data => <EventCard key={data.id} id={data.id} data={data} />)}
  </div>
);

export default EventCards;
