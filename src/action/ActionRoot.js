import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { navigateTo } from 'redux-router5/lib/actions'
import { withLoader } from '../component'
import CardList from '../component/CardList'


const enhance = compose(
  connect(state => ({ schema: state.schema })),
  withLoader(({ schema }) => !schema.hasData),
);

export default enhance(({ schema, dispatch }) => (
  <div>
    <CardList
      items={schema.actions}
      onSelect={item => dispatch(navigateTo('action/view', { id: item.id }))}
    />
  </div>
))
