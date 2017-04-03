// @flow

import Chance from 'chance'
import React from 'react'
import {compose, withHandlers, withProps, withState} from 'recompose'
import {Header, Section} from '../component'
import EventList from '../component/EventList.js'


let fake = new Chance()



class Channel {
  id: 'channel'
  type: 'Channel'
  label: string = fake.word()
  description: string = fake.paragraph()
  action: Array<string> = ['a1']
}

class Person {
  id: string = fake.url()
  type: string = 'Person'
  email: string = fake.email()
  givenName: string = fake.first()
  familyName: string = fake.last()
}

class ActionMessage {
  id: string = fake.guid()
  type: string = 'Action'
  actionStatus: string = 'CompletedActionStatus'
  agent: Person = new Person
  subject: string = fake.url()

  constructor(props) {
    Object.assign(this, props);
  }
}

class ActionModel {
  id: string = fake.url()
  type: string = 'Action'
  label: string = fake.word()
  description: string = fake.paragraph()
  example: ActionMessage = new ActionMessage({type: this.id})

  constructor(props) {
    Object.assign(this, props);
    this.example = new ActionMessage({type: this.id})
  }
}

const enhance = compose(
  withProps(props => ({
    channel: new Channel,
    action:  [
      new ActionModel({
        id: 'RegisterAction',
      }),
      new ActionModel({
        id: 'UnRegisterAction'
      })
    ],
    item:    [
      new ActionMessage,
      new ActionMessage,
      new ActionMessage,
      new ActionMessage,
      new ActionMessage,
      new ActionMessage
    ]
  }))
)

const withShowContentToggle = compose(
  withState('showContent', 'setShowContent', false),
  withHandlers({
    toggleShowContent: ({showContent, setShowContent}) => () => {
      setShowContent(!showContent);
    }
  })
)


const withToggle = compose(
  withShowContentToggle,
  withHandlers({
    onHeaderClick: (props) => (event, id) => {
      event.preventDefault()
      props.toggleShowContent()
      props.fetchMessage(id)
    }
  })
)

const ListItem = ({id, label, data, showContent, onHeaderClick}) =>
  <div key={id} style={{marginBottom: '.5em'}}>
    <div className="ui top attached menu">
      <div className="text item">{label || id}</div>
      <div className="right menu">
        <a className="item" onClick={(e) => onHeaderClick(e, id)}>
          <i className={'icon caret ' + (showContent ? 'down' : 'left')}></i>
        </a>
      </div>
    </div>
    {showContent && data &&
    <div className="ui bottom attached message small secondary">
      <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
    </div>
    }
  </div>

const ActionListItem = withToggle(ListItem)

const ChannelView = enhance(({channel, action, item}) => (
    <div>
      <Header as="h2">#{channel.label}</Header>
      <Section>
        <Header>Allowed Actions</Header>
        {action.map((data) => <ActionListItem {...{id: data.id, data: data}} />)}
      </Section>
      <Section>
        <Header>Events</Header>
        <EventList items={item}/>
      </Section>
    </div>
  )
)

export default ChannelView
