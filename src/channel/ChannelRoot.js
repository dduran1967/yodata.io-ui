// @flow

import values from 'lodash/values'
import React from 'react'
import { compose, getContext, withHandlers, withProps } from 'recompose'
import { createChannel } from './channelActions'
import SliderInput from '../component/SliderInput'
import Page from '../component/Page'
import Section from '../component/Section'
import CardList from '../component/CardList'
import Header from '../component/Header'
import { connect } from 'react-redux'

const enhance = compose(
  connect(state => ({
    data: state.db[ 'channel@root' ],
  })),
  getContext({
    router: React.PropTypes.object,
  }),
  withProps(({ data }) => ({
    channels: data && data.item && values(data.item),
  })),
  withHandlers({
    createChannel: ({ dispatch }) => name => dispatch(createChannel(name)),
  }),
);

const ChannelRoot = enhance(
  props => {
    return (
      <Page>
        <Section>
          <Header
            icon="hashtag"
            content="Channels"
            subheader="Organize and manage access to your data events."
          >
            <SliderInput
              icon="plus"
              placeholder="New Channel Name"
              onSubmit={props.createChannel}
            />
          </Header>
        </Section>

        <Section>
          <CardList
            items={props.channels || []}
            onSelect={item => {
              props.router.navigate('channel/view', { key: item.label });
            }}
          />
        </Section>
      </Page>
    )
  },
);

export default ChannelRoot;
