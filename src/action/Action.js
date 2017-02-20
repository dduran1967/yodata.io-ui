// @flow
import uuid from 'uuid/v1';

type Property = {
  id: string,
  type: string,
  label: string,
  description: string
}

class ActionDescriptor {
  id: string
  type: string
  label: string
  description: string
  implements: ActionDescriptor[]
  property: {[key:string]: Property}

  constructor = () => {
    this.id = uuid();
  }
}

export default ActionDescriptor;
