// @flow

import React from 'react';
import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState
} from 'recompose';
import { Form, Header, Input, List } from 'semantic-ui-react';
import CodeEditor from './CodeEditor';
import Button from './Button';
import { connect } from 'react-redux';
import { createMockType } from '../schema/getExampleValue';
import values from 'lodash/values';
import url from 'url';
import propertiesOfDeep from '../schema/propertiesOfDeep';
import exampleService from '../services/exampleService';

const ExampleValues = compose(
  connect(
    null,
    {
      addExample: exampleService.add,
      updateExample: exampleService.update
    }
  ),
  withState('index', 'setIndex', 0),
  withProps(props => {
    let currentValue = {};
    if (props.subject) {
      let subject = props.subject;
      if (subject.type === 'Type') {
        let allProperties = propertiesOfDeep(subject);
        let json = createMockType(subject.id, allProperties);
        currentValue = {
          type: 'SoftwareSourceCode',
          exampleOfWork: subject.id,
          json: json,
          text: JSON.stringify(json, null, 2)
        };
      }
    }
    return {
      currentValue
    };
  }),
  withState('nextValue', 'setNextValue', props => ({ ...props.currentValue })),
  withHandlers({
    onSubmit: props => () => {
      let object = props.nextValue;
      try {
        object.json = JSON.parse(object.text);
      } catch (e) {
        console.error('Unable to parse JSON', object);
      } finally {
        if (object.url) {
          props.dispatch({
            type: 'UpdateAction',
            object: props.currentValue,
            result: object,
            target: url.parse(object.url).pathname,
            actionStatus: 'PotentialActionStatus'
          });
        } else {
          props.addExample(object);

        }
      }
    }
  }),
  lifecycle({
    componentWillReceiveProps(next) {
      if (this.props.subject.id !== next.subject.id) {
        this.props.setNextValue({ ...next.currentValue });
      }
    }
  })
)(props => {
  let items = values(props.subject.exampleValue);
  let listItems = items.map(item => (
    <ViewEditExample subject={props.subject} currentValue={item} />
  ));
  return (
    <div>
      <List>
        {listItems}
      </List>
      <Header content="Add a new example" />
      <Form>
        <Input
          fluid
          placeholder={`Help us out! Add example value.`}
          action={
            <Button
              content="save"
              onClick={e => {
                e.preventDefault();
                props.onSubmit(props.nextValue);
              }}
            />
          }
          value={props.nextValue.description}
          onChange={(event, data) =>
            props.setNextValue({ ...props.nextValue, description: data.value })}
        />
        <CodeEditor
          value={props.nextValue.text}
          onChange={text => {
            props.setNextValue({ ...props.nextValue, text });
          }}
        />
      </Form>
    </div>
  );
});


const EditExample = props => (
  <Form>
    <Input
      fluid
      placeholder={`Help us out! Add example value.`}
      action={
        <Button
          content="save"
          onClick={e => {
            e.preventDefault();
            props.onSubmit(props.nextValue);
          }}
        />
      }
      value={props.nextValue.description}
      onChange={(event, data) =>
        props.setNextValue({ ...props.nextValue, description: data.value })}
    />
    <CodeEditor
      value={props.nextValue.text}
      onChange={text => {
        props.setNextValue({ ...props.nextValue, text });
      }}
    />
  </Form>
);

const ViewEditExample = compose(
  connect(),
  withState('nextValue', 'setNextValue', props => ({ ...props.currentValue })),
  withHandlers({
    onSubmit: props => () => {
      let object = props.nextValue;
      if (object.url) {
        if (!object.id) {
          object.id = url.parse(object.url).pathname;
        }
        props.dispatch({
          type: 'UpdateAction',
          object: props.currentValue,
          result: object
        });
      } else {
        props.dispatch({
          type: 'AddAction',
          object: object,
          targetCollection: `/public/schema/${props.subject.id}/exampleValue`,
          actionStatus: 'PotentialActionStatus'
        });
      }
    }
  }),
  lifecycle({
    componentWillReceiveProps(next) {
      if (this.props.subject.id !== next.subject.id) {
        this.props.setNextValue({ ...next.currentValue });
      }
    }
  })
)(EditExample);

export default ExampleValues;
