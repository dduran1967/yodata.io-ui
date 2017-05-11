// @flow

import React from 'react'
import { compose, withHandlers, withProps, withState } from 'recompose'
import { Form, Header, Input } from 'semantic-ui-react'
import CodeEditor from './CodeEditor'
import Section from './Section'
import Button from './Button'
import { connect } from 'react-redux'
import actionService from '../services/action_service.js'
import { createMockType, createMockValue } from '../schema/getExampleValue'
import { castArray, flatten, values } from 'lodash'

const DATA_TYPES = [
  'Boolean',
  'Number',
  'Date',
  'DateTime',
  'Text',
  'URL',
]

// todo: move to util folder
function first(val) {
  if (Array.isArray(val)) {
    return val[ 0 ]
  }
  return val;
}

const CodeEditorView = compose(
  connect(),
  withState('nextValue', 'setNextValue', props => ({ description: '', text: props.initialValue })),
  withHandlers({
    save: props => event => {
      console.log(props, event);
    },
  }),
)(props => (
  <Form>
    <Input
      fluid
      placeholder={`Help us out! Add example value.`}
      action={
        <Button content="save" onClick={e => {
          e.preventDefault()
          props.onSubmit(props.nextValue)
        }}/>
      }
      onChange={(event, data) => props.setNextValue({ ...props.nextValue, description: data.value })}
    />
    <CodeEditor
      value={props.nextValue.text}
      onChange={text => props.setNextValue({ ...props.nextValue, text })}
    />
  </Form>
));

const SimpleInputView = compose(
  withState('nextValue', 'setNextValue', {}),

)(props => (
  <Form>
    <Input
      fluid
      placeholder={`Help us out! Add example value.`}
      action={
        <Button content="save" onClick={e => {
          e.preventDefault()
          props.onSubmit(props.nextValue)
        }}/>
      }
      onChange={e => props.setNextValue(e.target.value)}
    />
  </Form>
));

export const AddExampleValue = props => {
  return (
    <div>
      <CodeEditorView initialValue={props.initialValue} onSubmit={props.onSubmit}/>
    </div>
  );
};

const ExampleValueItem = item => {
  return (
    <pre>
      <code>
        {item.description && `## ${item.description}`}
        {item.text}
      </code>
    </pre>
  )
}

const ExampleValuesUI = props => {
  let addValue;
  if (props.exampleValue.length == 0) {
    let type = props.subject.type === 'Type' ? props.subject.id : first(props.subject.rangeIncludes)
    let mockValue;
    if (DATA_TYPES.includes(type)) {
      mockValue = createMockValue(type)
    } else {
      let properties = props.properties && props.properties[ type ]
      mockValue = createMockType(type, properties);
    }
    addValue = <AddExampleValue
      initialValue={JSON.stringify(mockValue,null,2)}
      onSubmit={next => {
        props.dispatch(actionService.call('createExampleValue', props.subject, next.text, next.description))
      }}
    />
  }

  return (
    <Section>
      <Header content="Example Values"/>
      {addValue}
      {props.exampleValue && props.exampleValue.map(item => ExampleValueItem(item))}
    </Section>
  );
};

const controller = compose(
  connect(),
  withProps(props => ({
    exampleValue: props.subject && values(props.subject.exampleValue),
  })),
)

const ExampleValues = controller(ExampleValuesUI);

export default ExampleValues;
