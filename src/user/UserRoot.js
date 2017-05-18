import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
import { connect } from 'react-redux'
import Page from '../component/Page'
import TabGroup, { TabGroupItem } from '../component/TabGroup'
import InboxSettings from './InboxSettings'

const UserRoot = compose(
  connect(state => ({
    user: state.user,
    thrume: state.thrume,
  })),
  withState(
    'webhookURL',
    'setWebhookURL',
    ({ thrume }) => thrume.webhook && thrume.webhook.url,
  ),
  withHandlers({
    saveFile: ({ store, codeValue }) => event => {
      store.dispatch({ type: 'REACTIONS/SAVE_FILE', payload: codeValue });
    },
    sendToWebhook: ({ store, webhookURL, codeValue }) => event => {
      event.preventDefault();
      store.dispatch({
        type: 'THRUME/SET_WEBHOOK',
        payload: {
          enabled: true,
          url: webhookURL,
        },
      });
      store.dispatch({
        type: 'THRUME/SEND',
        payload: {
          type: 'LikeAction',
          agent: {
            type: 'Organization',
            name: 'Yodata',
          },
          object: {
            type: 'Text',
            value: 'We think you are pretty neat.',
          },
        },
      });
    },
  }),
)(({ user, dispatch, fetchProfile, ...props }) => (
  <Page>
    <TabGroup items={[ 'Inbox' ]} defaultTab="Inbox">
      <TabGroupItem name="Inbox">
        <InboxSettings />
      </TabGroupItem>
    </TabGroup>
  </Page>
));

export default UserRoot;
