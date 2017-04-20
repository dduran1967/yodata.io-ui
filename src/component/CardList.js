// @flow

import {compose, mapProps} from 'recompose';
import {CardGroup} from 'semantic-ui-react';
import {lit} from '../lib/rdf-utilities';


const cardGroupContainer = compose(
  mapProps(({items, onClick}) => ({
    items: items.map(item => ({
      header: lit(item.label),
      description: lit(item.description),
      key: item.id,
      onClick: event => {
        event.preventDefault();
        onClick(item);
      },
    })),
  })),
);

export default cardGroupContainer(CardGroup);
