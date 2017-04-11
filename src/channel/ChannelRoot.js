// @flow

import values from 'lodash/values';
import React from 'react';
import {compose, withHandlers} from 'recompose';
import {Segment} from 'semantic-ui-react';
import {CardList, Header} from '../component';
import subscribeTo from '../db/subscribeTo';
import {createChannel} from './channelActions';
import SliderInput from '../component/SliderInput';
import Page from '../component/Page';

const enhance = compose(
  subscribeTo(props => [props.route.path]),
  withHandlers({
    createChannel: ({dispatch}) =>
      (name: string) => dispatch(createChannel(name)),
  }),
);

const ChannelRoot = enhance(({
  listItems,
  createChannel,
  navigateTo,
  dispatch,
  data,
}) => (
  <Page>
    <Segment basic>
      <Header
        icon="hashtag"
        content="Channels"
        subheader="Channels connect things to your data."
      >
        <SliderInput placeholder="channel name" onSubmit={createChannel} />
      </Header>
    </Segment>

    <Segment basic>
      <CardList
        items={values(data && data.item)}
        onClick={item => {
          navigateTo('channel/view', {key: item.label});
        }}
      />
    </Segment>
  </Page>
));

export default ChannelRoot;
