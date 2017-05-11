// @flow

import values from 'lodash/values'
import actionService from '../services/action_service.js'

function first(val) {
  if (Array.isArray(val)) {
    return val[ 0 ]
  }
  return val;
}

const createExampleValue = actionService.getAction('createExampleValue')

type S = {
  id: string,
  type: string,
  exampleValue?: Array<any>,
  rangeIncludes?: Array<any>
}

export function getExampleValue(subject: S): Array<string> {
  if (!subject) {
    console.error('getExampleValue called with null/undefined subject')
    return []
  }
  return subject.exampleValue ? values(subject.exampleValue) : []
}

const mockTypeIndex = {
  'Boolean': [true, false],
  'Date': new Date().toDateString(),
  'DateTime': new Date().toISOString(),
  'Number': 1,
  'Text': 'string',
  'URL': 'https://example.com/exampleValue'
}


export function createMockValue(subject: S): any {
  if (subject.exampleValue) {
    return values(subject.exampleValue).map(val => {
      if (typeof val === 'string') {
        return val
      }
      if (typeof val == 'object') {
        return JSON.stringify(val,null,2);
      }
    })
  }
  let type = subject.type === 'Type' ? subject.id : first(subject.rangeIncludes);
  if (type === 'Text') {
    return subject.description || type;
  }
  if (type && mockTypeIndex[type]) {
    return mockTypeIndex[type];
  }
  return `/public/schema/${type || subject.id}`
}

export function createMockType(type, properties = []) {
  let jsonValue = properties.reduce((a, property) => {
    let key = property.id;
    let value = createMockValue(property);
    return { ...a, [key]: value }
  }, {})
  jsonValue.type = type;
  return jsonValue;
}


export default getExampleValue
