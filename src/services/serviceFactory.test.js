import createService from './serviceFactory'

const service = createService({ name: 'test_service' })
  .use(function (action) {
    if (action.type === 'AddAction') {
      return { ...action, foo: 'beforeAddAction' };
    }
    return action;
  })
  .use(action => {
    return { ...action, foo2: 'foo2' };
  });

test('service name assigned via props', () => {
  expect(service.name).toEqual('test_service');
  let defaultService = createService();
  expect(defaultService.name).toEqual('service');
});

test('dispatched actions are transformed by event hooks', () => {
  expect(service.dispatch({ type: 'AddAction' })).toEqual({
    type: 'AddAction',
    foo: 'beforeAddAction',
    foo2: 'foo2',
  });

  expect(service.dispatch({ type: 'UpdateAction' })).toEqual({
    type: 'UpdateAction',
    foo2: 'foo2',
  });
});

test('validate: action without a type adds a', () => {
  expect(service.dispatch({}))
    .toHaveProperty('error.type', 'RequiredPropertyError')

  expect(service.dispatch({}))
    .toHaveProperty('actionStatus', 'FailedActionStatus')

});
