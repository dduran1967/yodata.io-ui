import Type from '../Type'

test('create instance', () => {
  let type = new Type({ type: 'Thing' });
  expect(type).toMatchObject({ type: 'Thing' });

  let defaultInstance = new Type();
  expect(defaultInstance).toMatchObject({ type: 'Thing' });
});

test('set/get optional props', () => {
  let instance = new Type();
  instance.name = 'test';
  expect(instance).toMatchObject({
    type: 'Thing',
    name: 'test',
  });
});

test('toJSON drops undefined props', () => {
  let instance = new Type();
  expect(instance.toJSON()).toEqual({
    type: 'Thing',
  });
});

test('toString returns json.stringify (pretty)', () => {
  let state = { type: 'Thing' };
  let instance = new Type(state);
  expect(instance.toString()).toEqual(JSON.stringify(state, null, 2));
});

test('Type.extend', () => {
  let Action = Type.extend({ object: Object })
  expect(() => Action()).toThrow()

  let data = {
    type: 'Action',
    object: {
      type: 'Collection',
      name: 'Inbox'
    }
  }
  expect(Action(data)).toEqual(data)
})
