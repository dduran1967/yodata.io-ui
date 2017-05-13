// @flow

import React from 'react';
import {
  compose,
  flattenProp,
  lifecycle,
  shouldUpdate,
  withHandlers,
  withProps,
  withState
} from 'recompose';
import { Form, Header, Input } from 'semantic-ui-react';
import CodeEditor from './CodeEditor';
import Section from './Section';
import Button from './Button';
import { connect } from 'react-redux';
import { createMockType } from '../schema/getExampleValue';
import { castArray, flatten, values } from 'lodash';
import Debug from './Debug';
import url from 'url';
import getPropertiesOf from '../schema/getPropertiesOf.js';

const ExampleValues = compose(
  connect(),
  withState('index', 'setIndex', 0),
  withProps(props => {
    if (props.subject) {
      let subject = props.subject;
      let items = values(subject.exampleValue);
      if (items[props.index]) {
        return {
          currentValue: items[props.index]
        };
      }
      if (subject.type === 'Type') {
        let json = createMockType(subject.id, getPropertiesOf(subject.id));
        return {
          currentValue: {
            type: 'SoftwareSourceCode',
            exampleOfWork: subject.id,
            json: json,
            text: JSON.stringify(json, null, 2)
          }
        };
      }
    }
  }),
  withState('nextValue', 'setNextValue', props => ({ ...props.currentValue })),
  withHandlers({
    onSubmit: props => () => {
      let object = props.nextValue;
      try {
        object.json = JSON.parse(object.text);
      }
      catch (e) {
        console.error('Unable to parse JSON', object)
        return;
      }
      finally {
        if (object.url) {
          props.dispatch({
            type: 'UpdateAction',
            object: object,
            target: url.parse(object.url).pathname,
            actionStatus: 'PotentialActionStatus'
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
  return (
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
          props.setNextValue({...props.nextValue, text})
        }}
      />
    </Form>
  );
});

export default ExampleValues;
