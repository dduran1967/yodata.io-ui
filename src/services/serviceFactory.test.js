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

const FAILED_ACTION = {
  actionStatus: 'FailedActionStatus'
}

test('service name assigned via props', () => {
  expect(service.name)
    .toEqual('test_service');
});

test('default service.name is "service"', () => {
  expect(createService())
    .toHaveProperty('name', 'service')
})

test('dispatched actions are transformed by event hooks', () => {
  expect(service.dispatch({ type: 'AddAction' }))
    .toEqual({
      type: 'AddAction',
      foo: 'beforeAddAction',
      foo2: 'foo2',
    });

  expect(service.dispatch({ type: 'UpdateAction' }))
    .toEqual({
      type: 'UpdateAction',
      foo2: 'foo2',
    });
});

test('action error', () => {
  expect(service.dispatch({}))
    .toMatchObject(FAILED_ACTION)
});

test('subscriptions add error meta to action', () => {
  service.event$.subscribe(
    action => {
      if (typeof action.type === 'undefined') {
        expect(action).toHaveProperty('actionStatus','FailedActionStatus')
      }
    },
    action => {
      if (typeof action.type === 'undefined') {
        expect(action).toHaveProperty('actionStatus','FailedActionStatus')
      }
    }
  )
})