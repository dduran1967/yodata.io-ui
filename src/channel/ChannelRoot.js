// @flow

import values from 'lodash/values';
import React from 'react';
import {compose, withHandlers} from 'recompose';
import subscribeTo from '../db/subscribeTo';
import {createChannel} from './channelActions';
import SliderInput from '../component/SliderInput';
import Page from '../component/Page';
import Section from '../component/Section';
import CardList from '../component/CardList';
import Header from '../component/Header';

const enhance = compose(
  subscribeTo(props => [props.route.path]),
  withHandlers({
    createChannel: ({dispatch}) => name => dispatch(createChannel(name)),
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
    <Section>
      <Header
        icon="hashtag"
        content="Channels"
        subheader="Organize and manage access to your data events."
      >
        <SliderInput placeholder="channel name" onSubmit={createChannel} />
      </Header>
    </Section>

    <Section>
      <CardList
        items={values(data && data.item)}
        onClick={item => {
          navigateTo('channel/view', {key: item.label});
        }}
      />
    </Section>
  </Page>
));

export default ChannelRoot;
