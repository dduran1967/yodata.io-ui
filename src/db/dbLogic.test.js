import {searchLogic} from './dbLogic.js';

it('search_value', () => {
  let state = {};
  let action = {type: 'SEARCH_VALUE', payload: 'act'};
  expect(searchLogic.test(state, action)).toBe({});
});
