import React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import {navigateTo} from 'redux-router5/lib/actions'
import {MediaList, withLoader} from '../component'
import {fetchSchema} from '../schema/schemaActions.js'

const ActionRoot = ({schema, dispatch}) => (
  <div>
    <MediaList items={schema.actions} onClick={item => dispatch(navigateTo('action/view', {id: item.id}))}/>
  </div>
);

const enhance = compose(
  connect(state => ({schema: state.schema})),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(
        fetchSchema("https://devtest.yodata.me/test/schema.nt")
      );
    }
  }),
  withLoader(({schema}) => !schema.hasData),
);


export default enhance(ActionRoot);
