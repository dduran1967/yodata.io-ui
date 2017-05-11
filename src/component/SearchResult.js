// @flow

import React from 'react'
import { compose, getContext } from 'recompose'
import { getAction } from '../services/action_service'
import Header from './Header'
import Section from './Section'
import CardList from './CardList'

export const SearchResult = props => (
  <Section>
    <Header>Search Results</Header>
    <CardList
      items={props.search && props.search.results}
      onSelect={item => {
        props.dispatch(getAction('SEARCH/INIT')());
        props.router.navigate('types/view', { id: item.id });
      }}
    />
  </Section>

);

const controller = compose(
  getContext({
    router: React.PropTypes.object,
  }),
);

export default controller(SearchResult);
