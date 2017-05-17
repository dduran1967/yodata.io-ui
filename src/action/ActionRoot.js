import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { navigateTo } from 'redux-router5/lib/actions'
import { withLoader } from '../component'
import CardList from '../component/CardList'
import Page from '../component/Page'
import Header from '../component/Header'

const enhance = compose(
  connect(state => ({ schema: state.schema })),
  withLoader(({ schema }) => !schema.hasData),
);

export default enhance(({ schema, dispatch }) => (
  <Page>
    <Header
      icon="feed"
      content="Actions"
      subheader="Actions"
    />
    <CardList
      items={schema.actions}
      onSelect={item => dispatch(navigateTo('types/view', { id: item.id }))}
    />
  </Page>
))
