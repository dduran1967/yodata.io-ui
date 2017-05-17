import React from 'react';
import { connect } from 'react-redux';
import {compose} from 'recompose';
import { FormInput, Header } from 'semantic-ui-react'
import Form from 'react-jsonschema-form';
import Button from '../component/Button'

const schema = {
  type: 'object',
  title: 'Webhooks',
  properties: {
    webhookURL: {type: 'string'},
    enabled: {type: 'boolean'}
  }
}


const InboxSettings = compose()(props => (
  <div>
    <Header
      content="Webhooks"
      subheader="Push actions to your server in real time."
    />
    <Form
      schema={schema}
      className="ui form"
    >
      <Button type="submit">Save</Button>
    </Form>
  </div>
))

export default InboxSettings
