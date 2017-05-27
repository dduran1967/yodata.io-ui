// @flow

import createService from './serviceFactory'
import exampleService from './exampleService';
import {Subject} from 'rxjs';

const yap = createService({
  name: 'yap',
});

const app = new Subject();

export default app
