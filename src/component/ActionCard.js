// @flow

import React from 'react'
import { compose, withHandlers, withProps, withState } from 'recompose'
import withSchemaItem from '../schema/withSchemaItem'
import withLoader from './Loading'
import SpringCard from './SpringCard'
import getExampleOf from '../schema/getExampleValue'

const ActionCard = compose(
  withSchemaItem(props => props.id),
  withLoader(props => {
    return !props.data;
  }),
  withState('open', 'set_open', false),
  withProps(({ id, data }) => {
    let example = getExampleOf(data);
    return {
      header: id,
      meta: data.description,
      text: example && example.text,
      json: example && example.json,
      description: example && example.description,
      potentialAction: {
        type: 'THRUME/SEND',
        payload: {
          type: 'SendAction',
          object: example && example.text,
          target: {
            contentType: 'application/json',
            httpMethod: 'POST',
            urlTemplate: '/in/{uid}/',
          },
        },
      },
    }
  }),
  withHandlers({
    toggle: props => event => {
      let open = !props.open;
      props.set_open(open);
    },
  }),
)(SpringCard);

export const ActionCards = ({ items = [] }: { items: Array<Resource> }) => (
  <div>
    {items.map(({ id }) => <ActionCard key={id} id={id}/>)}
  </div>
);

export default ActionCard;
