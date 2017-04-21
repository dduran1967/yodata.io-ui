// @flow

import values from "lodash/values";
import React from "react";
import { compose, withHandlers, withProps } from "recompose";
import { createChannel } from "./channelActions";
import SliderInput from "../component/SliderInput";
import Page from "../component/Page";
import Section from "../component/Section";
import CardList from "../component/CardList";
import Header from "../component/Header";
import { connect } from "react-redux";
import Debug from "../component/Debug";

const enhance = compose(
  connect(state => ({
    data: state.db["channel@root"]
  })),
  withProps(({ data }) => ({
    channels: data && data.item && values(data.item)
  })),
  withHandlers({
    createChannel: ({ dispatch }) => name => dispatch(createChannel(name))
  })
);

const ChannelRoot = enhance(({
  listItems,
  createChannel,
  navigateTo,
  dispatch,
  data,
  channels = []
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
        items={channels}
        onClick={item => {
          navigateTo("channel/view", { key: item.label });
        }}
      />
    </Section>
  </Page>
));

export default ChannelRoot;
