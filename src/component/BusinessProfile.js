import React from 'react'
import Form from 'react-jsonschema-form'
import {Button} from 'semantic-ui-react'

const schema = {
  type: 'object',
  properties: {
    bankName: {
      title: 'Bank Name',
      type: 'string',
    },
    bankRoutingNumber: {
      title: 'Routing Number',
      type: 'string',
    },
    bankAccountNumber: {
      title: 'Account Number',
      type: 'string',
    },
  },
  required: [
    'bankName',
    'bankRoutingNumber',
    'bankAccountNumber',
  ],
}

const uiSchema = {
  bankName: {
    'ui:placeholder': 'Bank Name i.e. Wells Fargo',
  },
  bankRoutingNumber: {
    'ui:placeholder': 'Routing Number i.e. 12345678',
  },
  bankAccountNumber: {
    'ui:placeholder': 'Account Number: i.e. 123456789',
  },
}


const BusinessProfile = props => (
  <Form
    className="ui form"
    schema={schema}
    uiSchema={uiSchema}
    onSubmit={console.log}
  >
    <Button primary content="Submit" type="submit"/>
  </Form>
)

module.exports = BusinessProfile