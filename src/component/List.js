import {compose, withProps} from 'recompose'
import {List} from 'semantic-ui-react'
import {lit} from '../lib/rdf-utilities'

const enhance = compose(
  withProps(({items, onClick}) => ({
    items:   items.map(item => ({
      ...item,
      header:      lit(item.label),
      description: lit(item.description),
      key:         item.key || item.id,
      onClick:     event => {
        event.preventDefault();
        onClick(item);
      }
    })),
    divided: true,
    relaxed: true,
    link:    true
  }))
);

export default enhance(List);
