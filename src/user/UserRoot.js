import React from 'react';
import { Header, Section } from '../component';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import Page from '../component/Page';
import CodeEditor from '../component/CodeEditor';
import { Button, Form, Input, SegmentGroup } from 'semantic-ui-react';

const UserRoot = compose(
  connect(state => ({
    user: state.user,
    thrume: state.thrume
  })),
  withState(
    'webhookURL',
    'setWebhookURL',
    ({ thrume }) => thrume.webhook && thrume.webhook.url
  ),
  withHandlers({
    saveFile: ({ store, codeValue }) => event => {
      store.dispatch({ type: 'REACTIONS/SAVE_FILE', payload: codeValue });
    },
    sendToWebhook: ({ store, webhookURL, codeValue }) => event => {
      store.dispatch({
        type: 'THRUME/SET_WEBHOOK',
        payload: {
          enabled: true,
          url: webhookURL
        }
      });
      store.dispatch({
        type: 'THRUME/SEND',
        payload: {
          type: 'LikeAction',
          agent: {
            type: 'Organization',
            name: 'Yodata'
          },
          object: {
            type: 'Text',
            value: 'We think you are pretty neat.'
          }
        }
      });
    }
  })
)(({ user, dispatch, fetchProfile, ...props }) => (
  <Page>
    <Section>
      <Header
        content="Webhooks"
        subheader="Push actions to your server in real time."
      />
      <CodeEditor />
      <SegmentGroup horizontal>
        <Section style={{ flexGrow: 1 }}>
          <Form>
            <Input
              onChange={e => props.setWebhookURL(e.target.value)}
              fluid
              name={'webhookURL'}
              label={'URL'}
              placeholder="http://requestb.in/1kbym8l1"
              value={props.webhookURL}
            />
          </Form>
        </Section>
        <Section>
          <Button primary content="Send" onClick={props.sendToWebhook} />
        </Section>
      </SegmentGroup>

    </Section>
  </Page>
));

export default UserRoot;
