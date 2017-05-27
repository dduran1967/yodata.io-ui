import { createModel, Model, transform, validate } from '../Model'
import isFunction from 'lodash/isFunction'
const setValue = (key, fn, context) => {
  return subject => {
    let value = isFunction(fn) ? fn(subject, context) : fn;
    return { ...subject, [key]: value };
  };
};
const db = {
  context: {
    string: String,
    number: Number,
    object: Object,
    date: Date,
    array: Model.Array(String),
  },
  string: 'hello world',
  number: 1,
  object: { type: 'Person', name: 'Dave' },
  date: new Date(0),
  array: [ 'one', 'two' ],
  properties: [ 'string', 'number', 'object', 'date', 'array' ],
  invalidProperties: [ 'string', 'INVALID' ],
  required: [ 'string' ],
  valid: {
    string: 'hello world',
    number: 1,
    object: { type: 'Person', name: 'Dave' },
    date: new Date(0),
    array: [ 'one', 'two' ],
  },
  invalid: {
    string: 1,
    number: '1',
    object: 'object',
    date: 'new',
    array: { 1: 'a', 2: 'b' },
  },
};

db.testModel = createModel({
  context: db.context,
  properties: db.properties,
  required: db.required,
});

db.modelKeys = Object.keys(db.testModel.definition);

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

describe('createModel', () => {
  test('model properties match provided', () => {
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

describe('tranformation', () => {
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

describe('validation', () => {
  test('validation', () => {
    let valid = validate(db.valid, db.testModel);
    let invalid = validate(db.invalid, db.testModel);
    expect(valid.isValid).toBeTruthy()
    expect(invalid.isValid).toBeFalsy()
  });

  test('model.test', () => {
    expect(db.testModel.test(db.valid)).toBeTruthy();
    expect(db.testModel.test(db.invalid)).toBeFalsy();
  });
});
