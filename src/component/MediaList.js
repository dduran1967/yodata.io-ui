import {compose, mapProps} from 'recompose';
import {CardGroup} from 'semantic-ui-react';
import {lit} from '../lib/rdf-utilities';

const enhance = compose(
  mapProps(({items, onClick}) => ({
    items: items.map(item => ({
      header: lit(item.label),
      description: lit(item.description).replace(/<\/?[^>]+(>|$)/g, ''),
      key: item.id,
      onClick: event => {
        event.preventDefault();
        onClick(item);
      },
    })),
  })),
);

export default enhance(CardGroup);
