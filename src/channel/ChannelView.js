import React from 'react'
import {compose} from 'recompose'
import {Debug, Header, Section} from '../component'
import subscribeTo from '../db/subscribeTo.js'

const enhance = compose(
  subscribeTo(props => [props.route.path])
)

const ChannelView = enhance(({data = {}}) => (
    <div>
      <Header as="h2">#{data.label}</Header>
      <Debug {...data} />
      <Section>
        <Header>Allowed Actions</Header>
        {/*<List items={data.action} relaxed={true}/>*/}
      </Section>
      <Section>
        <Header as="h3">Events</Header>
        {/*<EventList items={data.contains}/>*/}
      </Section>
    </div>
  )
)

export default ChannelView
