import { createModel, mapPropertiesToDataType, Model, transform, validate } from '../Model'

import isFunction from 'lodash/isFunction'
const setValue = (key, fn, context) => {
  return subject => {
    let value = isFunction(fn) ? fn(subject, context) : fn;
    return { ...subject, [key]: value };
  };
};

const db = {
  context: {
    string: { rangeIncludes: 'Text' },
    dateTime: { rangeIncludes: 'Date' },
    date: { rangeIncludes: 'Date' },
    time: { rangeIncludes: 'Time' },
    number: { rangeIncludes: 'Number' },
    namedTypes: { rangeIncludes: [ 'Person', 'Organization' ] },
    literal: { rangeIncludes: 'Literal' },
    url: { rangeIncludes: 'URL' },
  },
  properties: [
    'string',
    'dateTime',
    'date',
    'time',
    'number',
    'namedTypes',
    'literal',
    'url',
  ],
  required: [],
  valid: {
    string: 'hello world',
    date: new Date(0),
    number: 1,
    url: 'http://bob.ex.com',
    namedTypes: { type: 'Person' },
  },
  invalid: {
    string: 1,
    number: '1',
    date: 'new',
    namedTypes: 'Thing',
  },
};
db.testModel = createModel({
  context: db.context,
  properties: db.properties,
  required: db.required,
});
db.modelKeys = Object.keys(db.testModel.definition);

describe('DEFINED MODELS', () => {
  test('Model.Type', () => {
    let instance = Model.Type({ type: 'Thing' });
    expect(instance).toEqual({ type: 'Thing' });
    expect(instance.toJSON()).toEqual({ type: 'Thing' });
  });

  test('Model prototype functions', () => {
    let T = Model({ type: String, name: [ String ] });
    T.prototype.toJSON = function () {
      let values = { ...this };
      let json = JSON.stringify(values);
      return JSON.parse(json);
    };
    let state = { type: 'Thing' };
    let instance = new T(state);
    expect(instance.toJSON()).toEqual(state);
  });
})

describe('MAP PROPERTIES TO DATATYPE', () => {
  test('create context doesnt crash! ', () => {
    expect(
      mapPropertiesToDataType(db.properties, db.context, db.required),
    ).toBeTruthy();
  });
});

describe('CREATE MODEL', () => {
  test('properties become model keys', () => {
    let { modelKeys, properties } = db;
    expect(modelKeys).toEqual(properties);
  });
  test('throws when property not in context', () => {
    let props = {
      properties: db.invalidProperties,
      context: db.context,
    };
    expect(() => createModel(props)).toThrow();
  });
});

describe('MODEL TRANSFORMATION', () => {
  const data = { string: 'foo' };
  const actions = [
    setValue('string', 'bar'), // change an existing property
    setValue('number', 2) // create a new property
  ];
  const expected = {
    string: 'bar',
    number: 2,
  };
  const transformed = transform(data, actions, db.context);

  test('additional properties', () => {
    expect(transformed).toMatchObject(expected);
  });
});

describe('MODEL VALIDATION', () => {
  test('model.validate does not throw with valid object', () => {
    expect(db.testModel.validate(db.valid)).toBeUndefined();
  });
  test('model.validate throws with invalid object', () => {
    expect(() => db.testModel.validate(db.invalid)).toThrow();
  });
  test('validate with good data', () => {
    expect(validate(db.valid, db.testModel)).toEqual({
      isValid: true,
      errors: [],
      errorCount: 0,
    });
  });
  test('validation with error meta', () => {
    expect(validate(db.invalid, db.testModel)).toMatchObject({
      isValid: false,
      errorCount: 4,
    });
  });

  test('model.test', () => {
    expect(db.testModel.test(db.valid)).toBeTruthy();
    expect(db.testModel.test(db.invalid)).toBeFalsy();
  });
});
