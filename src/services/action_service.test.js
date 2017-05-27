import { ActionFactory } from './action_service'

const action = ActionFactory({ type: 'TestAction' });

test('action creators', () => {
  expect(action.type).toEqual('TestAction')
  expect(action.create()).toHaveProperty('type', 'TestAction')
})

test('validation', () => {
  let a = ActionFactory({
    type: 'testValidataion',
    required: [
      'object'
    ]
  })
})
