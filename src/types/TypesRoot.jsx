// @flow

import React from 'react';
import Page from '../component/Page';
import Header from '../component/Header';
import MediaList from '../component/MediaList';
import { connect } from 'react-redux';
import { compose, getContext, lifecycle, withProps } from 'recompose';
import actionSevice from '../services/action_service.js';
import keyBy from 'lodash/keyBy';
import subClassesOf from '../schema/getSubClassesOf';
import values from 'lodash/values';


const controller = compose(
  getContext({
    router: React.PropTypes.object
  }),
  connect(
    state => ({
      schema: keyBy(subClassesOf('Thing'),'id'),
      user: state.user
    }),
    {
      subscribe: actionSevice.getAction('subscribe')
    }
  ),
  withProps(props => {
    return {
      items: values(props.schema)
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
