import * as firebase from 'firebase'
import values from 'lodash/values'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withProps} from 'recompose'
import {Segment} from 'semantic-ui-react'
import BaseCard from '../component/BaseCard'
import Debug from '../component/Debug.js'
import EventCards from '../component/EventCards.js'
import Header from '../component/Header'
import Page from '../component/Page'


function getUrl(ref: string) {
  return firebase.database().ref(ref).toString();
}

const Description = () =>
  <div>
    <p>To send yourself a message, HTTP post to your inbox URL.</p>
    <p>All actions require a type. You can find hundreds of existing actions from schema.org, linked-data notifications,
      and others in the Schema directory.</p>
    <p>
      Most actions will have an agent (the person or entity who is the direct performer of the action) and an object,
      which is the thing being acted upon.
      Mutations (actions that modify the state of an object) are expected to be execute upon the actions object.
    </p>

  </div>

const jsonData = {
  type:        'AskAction',
  agent:       '/user/{uid}/profile/card#me',
  object:      {
    type:     'Question',
    question: {
      text: 'How are you today?'
    }
  },
  participant: {
    recipient: {
      type: 'Person',
      id:   '/user/{uid}/profile/card#me'
    }
  }
}

const GreetingCard = compose(
  connect(state => ({})),
  withProps(props => ({
    header:          'Send an action.',
    description:     <Description/>,
    json:            jsonData,
    open:            true,
    potentialAction: {
      type:    'THRUME/SEND',
      payload: jsonData
    }
  }))
)(BaseCard)

const ThrumeRootView = props => (
  <Page>
    <Segment style={{marginTop: '1em'}}>
      <Header
        icon="feed"
        content="Thrume"
        subheader="Open source, decentralized data integration toolkit."
      />
    </Segment>

    <Header content="Quickstart" as="h1"/>
    <GreetingCard />

    <Header content="Events"/>
    <EventCards items={props.items}/>
  </Page>
)

const thrumeRootContainer = compose(
  connect(
    state => ({
      thrume: state.thrume,
      root:   state.db['thrume@root']
    }),
  ),
  withProps(props => {
    return {
      thrumeUrl: getUrl(props.thrume.base),
      items:     values(props.root && props.root.now)
    }
  })
)

export default thrumeRootContainer(ThrumeRootView)
