import collection from './collectionFactory'

const SVC = collection.methods({
  getName() {
    return this.name;
  },
})({
  name: 'test_service',
  targetCollection: 'collection',
});

SVC.use(function (action) {
  if (action && action.object && action.object.exampleOfWork) {
    return { ...action, targetCollection: `/example/${action.object.exampleOfWork}` }
  }
  return action;
})

test('use enhancer', () => {
  let object = {
    type: 'SoftwareSourceCode',
    exampleOfWork: 'Action',
  }
  expect(SVC.add(object)).toEqual({
    type: 'AddAction',
    object: {
      type: 'SoftwareSourceCode',
      exampleOfWork: 'Action',
    },
    targetCollection: '/example/Action',
  })
})

test('composeAction', () => {
  let type = 'TestAction';
  let object = { type: 'Person' };
  let meta = { a: 'a', b: 'b' };
  expect(SVC.composeAction(type, object, meta)).toEqual({
    type: 'TestAction',
    object: { type: 'Person' },
    a: 'a',
    b: 'b',
  });
});

test('collection.add', () => {
  expect(SVC.add({ type: 'Person' }, { meta: 'meta' })).toEqual({
    type: 'AddAction',
    object: { type: 'Person' },
    meta: 'meta',
    targetCollection: 'collection',
  });
});

test('collection.update', () => {
  expect(SVC.update({ type: 'Person' }, { meta: 'meta' })).toEqual({
    type: 'UpdateAction',
    object: { type: 'Person' },
    meta: 'meta',
    targetCollection: 'collection',
  });
});

test('collection.delete', () => {
  expect(SVC.delete({ type: 'Person' }, { meta: 'meta' })).toEqual({
    type: 'DeleteAction',
    object: { type: 'Person' },
    meta: 'meta',
    targetCollection: 'collection',
  });
});

test('custom methods', () => {
  SVC.foo2 = function () {
    return this.name;
  };
  expect(SVC.getName()).toEqual('test_service');
  expect(SVC.foo2()).toEqual('test_service');
});
