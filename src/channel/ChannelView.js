import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose'
import {Debug, EventList, Header, List, Section} from '../component'


const ChannelView = ({data, fetchMessage}) => (
  <div>
    <Header as="h2">#{data.label}</Header>
    <Section>
      <Header>Allowed Actions</Header>
      <List items={data.action} relaxed={true}/>
    </Section>
    <Section>
      <Header as="h3">Events</Header>
      <EventList items={data.contains}/>
    </Section>

  </div>
);


const withResource = compose(
  connect(state => ({ref: state.router.route.params.id})),
  withState('data', 'setData', {}),
  withHandlers({})
)

export default compose(
  connect(
    ({refs = ['channel/item/zeiz'], ...rest}) => ({
      refs: refs.reduce((a, v) => ({...a, [v]: {}}), {})
    }))
)(Debug)

