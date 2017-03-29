import React from 'react'
import {EventList, Header, List, Section} from '../component'

const data = {
  id:       "http://devtest.yodata.me/stream/website/",
  type:     "Stream",
  label:    "Website",
  action:   [
    {
      key:   "RegisterAction",
      label: "RegisterAction",
      value: "http"
    },
    {
      key:   "UnRegisterAction",
      label: "UnRegisterAction"
    },
    {
      key:   "AskAction",
      label: "AskAction"
    },
    {
      key:   "ReplyAction",
      label: "ReplyAction"
    }
  ],
  contains: [
    {
      termType: "NamedNode",
      value:    "https://devtest.yodata.me/stream/website/01db6c20-f568-11e6-8671-e38dc9fbccfe"
    },
    {
      termType: "NamedNode",
      value:    "https://devtest.yodata.me/stream/website/0946b670-f565-11e6-8671-e38dc9fbccfe"
    },
    {
      termType: "NamedNode",
      value:    "https://devtest.yodata.me/stream/website/0d8e2780-f58e-11e6-8671-e38dc9fbccfe"
    },
    {
      termType: "NamedNode",
      value:    "https://devtest.yodata.me/stream/website/0decc240-f58e-11e6-8671-e38dc9fbccfe"
    },
    {
      termType: "NamedNode",
      value:    "https://devtest.yodata.me/stream/website/1ad41ef0-f565-11e6-8671-e38dc9fbccfe"
    },
    {
      termType: "NamedNode",
      value:    "https://devtest.yodata.me/stream/website/1d03a1c0-f568-11e6-8671-e38dc9fbccfe"
    },
    {
      termType: "NamedNode",
      value:    "https://devtest.yodata.me/stream/website/1e3ef700-f7d0-11e6-8671-e38dc9fbccfe"
    }
  ]
};

const ChannelView = ({stream = data, fetchMessage}) => (
  <div>
    <Header as="h2">#{stream.label}</Header>
    <Section>
      <Header>Allowed Actions</Header>
      <List items={stream.action} relaxed={true}/>
    </Section>
    <Section>
      <Header as="h3">Events</Header>
      <EventList items={stream.contains}/>
    </Section>

  </div>
);

export default ChannelView
