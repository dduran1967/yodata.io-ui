import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'
import {navigateTo} from 'redux-router5/lib/actions'
import {MediaList, withLoader} from '../component'
import {Card} from 'semantic-ui-react';


const enhance = compose(
  connect(state => ({schema: state.schema})),
  withLoader(({schema}) => !schema.hasData),
);

export default enhance(({schema, dispatch}) => (
  <div>
    <MediaList
      items={schema.actions}
      onClick={item => dispatch(navigateTo('action/view', {id: item.id}))}
      children={Card}
    />
  </div>
))
