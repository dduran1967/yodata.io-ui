// @flow

import * as firebase from 'firebase'
import values from 'lodash/values'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps, withState} from 'recompose'
import {Label, Popup, Segment} from 'semantic-ui-react'
import Header from '../component/Header'
import Page from '../component/Page'
import CodeEditor from '../component/CodeEditor'
import Link from '../component/Link.js'
import TextPopup from '../component/TextPopup.jsx'
import {Button} from '../component/index'
import stringify from '../component/stringify'
import check from 'check-types'
// import {Checkbox} from 'semantic-ui-react'

function getUrl(ref: string) {
  return firebase.database().ref(ref).toString();
}

const ThrumeRootView = props => {
  const example = stringify({
    '@context': 'http://schema.org/',
    type: 'CommunicateAction',
    agent: {
      type: 'Person',
      id: props.agent,
      name: props.currentUser && props.currentUser.displayName,
    },
    object: {
      type: 'Text',
      value: 'Hello World!',
    },
    participant: {
      recipient: props.agent,
    },
    target: {
      type: 'EntryPoint',
      httpMethod: 'POST',
      contentType: 'application/ld+json',
      urlTemplate: `/in/${props.currentUser && props.currentUser.uid}`,
    },
  })

  return (
    <Page>

      <Segment style={{marginTop: '1em'}}>
        <Header
          icon="feed"
          content="Quickstart"
          subheader="Open source, decentralized data integration toolkit."
        />
      </Segment>

      <Segment id="sending_actions">
        <Header content="Sending Actions"/>
        <p>
          To send a message, simply http POST to your inbound URL.
        </p>
        <p>
          <Label basic color={'blue'} content="Your inbound URL" detail={getUrl(props.thrumeUrl)}/>
        </p>
        <p>
          Key properties of Actions are <Popup trigger={<span>type</span>} header="type" content="Action identifier"/>
          (required),
          <TextPopup trigger="agent" content="The direct performer of the action"/> and <TextPopup trigger="object"
                                                                                                   content="The thing (subject) being acted upon, whos state may be changed by the action."/>.
        </p>
        <p>
          See <Link name="types/view" params={{id: 'Action'}}>Actions</Link> for the complete spec.
        </p>

        <CodeEditor
          value={props.nextSendAction || example }
          onChange={(nextValue) => props.setNextSendAction(nextValue)}
        />
        <hr/>
        <Segment attached="bottom">
          <Button primary content="SEND" onClick={() => props.notify(props.nextSendAction || example)}/>


        </Segment>

      </Segment>

    </Page>
  );
};

const thrumeRootContainer = compose(
  connect(state => ({
    agent: state.user.root,
    thrume: state.thrume,
    root: state.db['thrume@root'],
    currentUser: state.user && state.user.currentUser,
  })),
  withState('nextSendAction', 'setNextSendAction', null),
  withProps(props => {
    return {
      thrumeUrl: `/in/${props.currentUser && props.currentUser.uid}`,
      items: values(props.root && props.root.now),
    };
  }),
  withHandlers({
    notify: ({dispatch}) => next => {
      try {
        let data = JSON.parse(next);
        check.assert(data.object.value)
        dispatch({
          type: 'NOTIFICATIONS/ADD',
          payload: {
            level: 'success',
            title: `Message from: ${data.agent && (data.agent.name || data.agent.id)}`,
            message: data.object.value,
          },
        })
      } catch (e) {
        dispatch({
          type: 'NOTIFICATIONS/ADD',
          payload: {
            level: 'error',
            title: 'Uh oh.',
            message: 'invalid message format',
          },
        })
      }
    },
  }),
);

export default thrumeRootContainer(ThrumeRootView);
