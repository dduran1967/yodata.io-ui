import React from 'react'
import { compose, renderNothing, withHandlers, withProps } from 'recompose'
import { Header } from 'semantic-ui-react'
import Form from '../component/SchemaForm'
import Button from '../component/Button'
import Debug from '../component/Debug'
import { connect } from 'react-redux'

const OBJECT = 'object'
const STRING = 'string'
const BOOLEAN = 'boolean'

const InboxSettings = compose(
  connect(state => ({
    user: state.user,
    thrume: state.thrume,
  })),
  withProps(props => ({
    schema: {
      type: OBJECT,
      properties: {
        inboxURL: { type: STRING },
        webhook: {
          type: OBJECT,
          properties: {
            url: { type: STRING },
            enabled: { type: BOOLEAN },
          },
        },
      },
    },
    uiSchema: {
      inboxURL: {
        'ui:disabled': true
      },
      webhook: {
        url: {
          'ui:help': 'Forward (HTTP Post) all inbox items to a location.'
        }
      }
    },
    formData: props.thrume,
  })),
  withHandlers({
    onSubmit: ({ dispatch, thrume }) => ({ formData }) => {
      dispatch({
        type: 'UpdateAction',
        object: thrume && thrume.id,
        result: formData,
      })
    },
  }),
)(props => (
  <div>
    <Header
      content="Inbox Settings"
    />
    <Form
      schema={props.schema}
      uiSchema={props.uiSchema}
      onSubmit={props.onSubmit}
      formData={props.formData}
    >
      <Button type="submit" primary>Save</Button>
    </Form>
  </div>
));

export default InboxSettings;
