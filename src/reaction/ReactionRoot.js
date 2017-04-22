import React from 'react'
import Page from '../component/Page'
import {Form, Input, Segment, SegmentGroup} from 'semantic-ui-react'
import Header from '../component/Header'
import CodeEditor from '../component/CodeEditor'
import Button from '../component/Button'
import {compose, getContext, withHandlers, withState} from 'recompose'
import stringify from '../component/stringify'
import {connect} from 'react-redux'
import HttpCodeExample from '../component/httpCodeExample'

const Reactions = props => {
  return (
    <Page>

      <Segment style={{marginTop: '1em'}}>
        <Header
          icon="feed"
          content="Receiving Actions"
          subheader="REST API, Webhooks and Cloud Functions"
        />
      </Segment>

      <Segment>
        <Header
          content="REST API"
        />

        <p>
          You can use any Database URL as a REST endpoint. All you need to do is append .json to the end of the URL
          and send a request from your favorite HTTPS client.
        </p>

        <HttpCodeExample
          request={{
            method: 'get',
            url: '/in/{uid}/filename.json',
          }}
          response={{
            body: `{...}`,
          }}
        />

      </Segment>


      <Segment>
        <Header
          content="Webhooks"
          subheader="Push actions to your server in real time."
        />
        <CodeEditor value={props.getExample()}/>
        <SegmentGroup horizontal>
          <Segment style={{flexGrow: 1}}>
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
          </Segment>
          <Segment>
            <Button primary content="Send" onClick={props.sendToWebhook}/>
          </Segment>
        </SegmentGroup>

      </Segment>

      <Segment>
        <Header
          content="COMMING SOON: HOSTED CLOUD FUNCTIONS"
          subheader="Discover, create and share action handelers in javascript, no server required."
        />
        <CodeEditor
          value={props.codeValue}
          onChange={nextValue => props.setCodeValue(nextValue)}
        />
      </Segment>

    </Page>
  );
};

const deaultFunc = `
/*
* Request object is a standard node/express Request!!!
*/
module.exports = function (request, response) {
  response.send('DO STUFF WITH YOUR ACTIONS HERE')
}
`;

const reactionContainer = compose(
  connect(
    state => ({
      thrume: state.thrume,
    }),
  ),
  getContext({
    store: React.PropTypes.object,
  }),
  withState('codeValue', 'setCodeValue', deaultFunc),
  withState('webhookURL', 'setWebhookURL', ({thrume}) => thrume.webhook && thrume.webhook.url),
  withHandlers({
    saveFile: ({store, codeValue}) => event => {
      store.dispatch({type: 'REACTIONS/SAVE_FILE', payload: codeValue});
    },
    sendToWebhook: ({store, webhookURL, codeValue, getExample}) => event => {
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
    getExample: props => event => {
      return stringify({
        type: 'LikeAction',
        agent: {
          type: 'Organization',
          name: 'Yodata',
        },
        object: {
          type: 'Text',
          value: 'We think you are pretty neat.',
        },
      });
    },
  }),
);

export default reactionContainer(Reactions);
