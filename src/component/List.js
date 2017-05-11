// @flow

import {compose, withHandlers, withProps} from 'recompose'
import {List} from 'semantic-ui-react'
import {lit} from '../lib/rdf-utilities'
import isFunction from 'lodash/isFunction';


const container = compose(
  withProps(({items, onClick}) => ({
    items:   items.map(item => ({
      ...item,
      header:      lit(item.label),
      description: lit(item.description),
      key:         item.key || item.id
    })),
    divided: true,
    link:    true,
    relaxed: true
  })),
  withHandlers({
    onItemClick: props => (event, data) => {
      event.preventDefault();
      if (isFunction(props.onSelect)) {
        props.onSelect(data);
      }
    }
  })
);

export default container(List)

