import React from 'react'
import Form from 'react-jsonschema-form'
import { Checkbox } from 'semantic-ui-react'

const CustomCheckbox = function (props) {
  return (
    <Checkbox
      id="custom"
      checked={props.value}
      onClick={() => props.onChange(!props.value)}
      label={props.label}
      toggle={props.toggle || true}
    />
  );
};

export default function SchemaForm(props) {
  return (
    <Form
      className="ui form"
      widgets={{
        CheckboxWidget: CustomCheckbox,
      }}
      {...props}
    />
  );
}
