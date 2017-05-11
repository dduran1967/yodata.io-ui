// @flow

import React from 'react'
import Form from 'react-jsonschema-form'
import { Button } from 'semantic-ui-react'

const schema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      title: 'Email Address',
      format: 'email',
    },
    password: {
      type: 'string',
      title: 'Password',
    },
  },
};

const uiSchema = {
  password: {
    'ui:widget': 'password',
  },
};

const Signup = () => (
  <Form schema={schema} uiSchema={uiSchema} className="ui form" onSubmit={console.log}>
    <Button type="submit" primary content="Signup"/>
  </Form>
);

export default Signup
