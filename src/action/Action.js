// @flow
import uuid from 'uuid/v1';

class Action {
  constructor(props) {
    Object.assign(this, {
      id:          uuid(),
      type:        'Action',
      label:       '',
      name:        '',
      description: '',
      properties:  {},
      ...props
    });
  }

  get termType() {
    return 'NamedNode'
  }

  get uri() {
    return this.id;
  }

  addProperty = ({id, type, label, description}) => {
    this.properties[id] = {id, type, label, description};
  }

  toNT = () => `<${this.id}>`;
}

export default Action

window.$Action = Action;

