// @flow

import collection from './collectionFactory'

const exampleService = collection({ name: 'example' })

export default exampleService
// import get from 'lodash/get';
//
// interface Action {
//   type: string
// };
//
// const EXAMPLE_SERVICE_NAME = 'example';
//
// const exampleService = new Service({
//   name: EXAMPLE_SERVICE_NAME,
// eventHook: {
//   beforeAddAction: function beforeAdd(action) {
//     let subject = get(action, 'object.exampleOfWork');
//     if (typeof subject === 'string') {
//       return {
//         ...action,
//         targetCollection: `/example/${subject}`,
//       };
//     }
//     return action;
//   }
// }
// });
//
// function exampleReducer<Reducer>(state = {}, action: Action): Object {
//   if (action.targetCollection === EXAMPLE_SERVICE_NAME) {
//     switch (action.type) {
//       case 'AddAction':
//         if (action.object && action.object.id) {
//           return { ...state, [action.object.id]: action.object };
//         }
//         break;
//       default:
//         return state;
//     }
//   }
//   return state;
// }
//
// exampleService.createReducer(exampleReducer);
//
// export default exampleService;
