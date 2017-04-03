// @flow

import Chance from 'chance'
import React from 'react'
import {compose, withHandlers, withState} from 'recompose'
const fake = new Chance()

const withShowContentToggle = compose(
  withState('showContent', 'setShowContent', false),
  withHandlers({
    toggleShowContent: ({showContent, setShowContent}) => () => {
      setShowContent(!showContent);
    }
  })
)

class Person {
  id: string = fake.url()
  type: string = 'Person'
  email: string = fake.email()
  givenName: string = fake.first()
  familyName: string = fake.last()
}

class ActionMessage {
  id: string = fake.url()
  type: string = 'Action'
  actionStatus: string = 'CompletedActionStatus'
  agent: Person = new Person
  subject: string = fake.url()
}

const enhance = compose(
  withShowContentToggle,
  withHandlers({
    onHeaderClick: (props) => (event, id) => {
      event.preventDefault()
      props.toggleShowContent()
      props.fetchMessage(id)
    }
  })
)

const ChannelEvent = ({id, label, data, showContent, onHeaderClick}) =>
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
    <div className="ui bottom attached message small inverted">
      <pre><code style={{color: 'lime'}}>{JSON.stringify(data, null, 2)}</code></pre>
    </div>
    }
  </div>

const EventListItem = enhance(ChannelEvent)

export default function EventList(props: { items: Array<any> }) {
  return (
    <div>
      {props.items.map((data) => <EventListItem {...{id: data.id, data: data}} />)}
    </div>
  )
}
