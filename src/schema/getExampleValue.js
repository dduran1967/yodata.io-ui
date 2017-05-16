// @flow

import values from 'lodash/values'
import actionService from '../services/action_service.js'
import json from 'json5'
import getSchemaObject from './getSchemaObject'
const createExampleValue = actionService.getAction('createExampleValue')
import isArray from 'lodash/isArray';

type WorkExample = {
  type?: string,
  description?: string,
  exampleOfWork: string,
  json: JSON,
  text: string,
  url?: string
}

type S = {
  id: string,
  type: string,
  subClassOf?: Array<string>,
  exampleValue?: Array<any>,
  rangeIncludes?: Array<any>
}

function first(val) {
  if (typeof val === 'string') {
    return val;
  }
  return values(val)[ 0 ];
}

function hasExample(subject) {
  return subject.exampleValue && values(subject.exampleValue).length > 0;
}

export function createMockValue(subject: S): any {
  if (subject) {
    if (hasExample(subject)) {
      let example = first(subject.exampleValue);
      let text = example.text || '';
      try {
        let response = text.startsWith('{') ? json.parse(example.text) : example.text;
        return response;
      } catch (e) {
        console.error(`failed to json parse ${subject.id}`)
        return text;
      }
    }
    switch (subject.type) {
      case 'Type': {
        return createMockType(subject.id);
      }
      case 'Property': {
        let propertyType = first(subject.rangeIncludes);
        let propertySubject = getSchemaObject(propertyType);
        return createMockValue(propertySubject)
      }
      case 'Boolean':
        return true;
      case 'Date':
        return new Date().toDateString();
      case 'DateTime':
        return new Date().toISOString();
      case 'Number':
        return 1.0;
      case 'Text':
        return subject.id
      case 'URL':
        return `https://example.com/${subject.id}`
      default:
        // enumerations
        return subject.id
    }
  }
  throw new Error('subject required')
}

export function createMockType(type: string, properties: Array<S> = []) {
  let value = {type};
  if (isArray(properties) && properties.length > 0) {
    properties.forEach(prop => {
      value[prop.id] = createMockValue(prop);
    })
  }
  return value;
}


export function getExampleValue(subject: S): WorkExample {
  if (subject) {
    if (hasExample(subject)) {
      return first(subject.exampleValue);
    }
    let mockJson = createMockValue(subject);
    let mockText = json.stringify(mockJson);
    return {
      exampleOfWork: subject.id,
      json: mockJson,
      text: mockText,
    }
  }
  console.error('getExampleValue called with null/undefined subject')
}

export default getExampleValue
