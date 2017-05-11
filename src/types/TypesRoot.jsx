// @flow

import React from 'react';
import Page from '../component/Page';
import Header from '../component/Header';
import MediaList from '../component/MediaList';
import { connect } from 'react-redux';
import { compose, getContext, lifecycle, withProps } from 'recompose';
import actionSevice from '../services/action_service.js';
import sampleSize from 'lodash/sampleSize';

const controller = compose(
  getContext({
    router: React.PropTypes.object
  }),
  connect(
    state => ({
      schema: state.db.schema,
      user: state.user
    }),
    {
      subscribe: actionSevice.getAction('subscribe')
    }
  ),
  withProps(props => {
    let listItems = sampleSize(props.schema, 25);
    return {
      items: listItems
    };
  }),
  lifecycle({
    componentDidMount() {
      this.props.subscribe('schema', '/public/schema');
    }
  })
);

const TypesRoot = props => {
  return (
    <Page>
      <Header
        icon="code"
        content="Type Library"
        subheader="standard actions and models from schema.org, linked-data, RESO and others..."
      />
      <MediaList
        items={props.items}
        handleClick={(event, value) => {
          event.preventDefault();
          props.router.navigate('types/view', { id: value.id });
        }}
        itemsPerRow={3}
      />
    </Page>
  );
};

export default controller(TypesRoot);
