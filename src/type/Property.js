// @flow
import {observable, extendObservable, autorun, action, computed} from 'mobx';

class Property {
  constructor() {
    extendObservable(this, {
      id:          null,
      type:        '',
      name:        '',
      description: '',
      domain:      '',
      range:       '',
      url:         ''
    })
  }
}

export default Property;