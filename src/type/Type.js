// @flow

class Type {
  constructor(props) {
    Object.assign(this, {
      id: '',
      ...props
    })
  }


  addProperty = ({id, type, label, description}) => {
    this.properties[id] = {id, type, label, description};
  }

  toNT = () => `<${this.id}>`;

  hashString = this.toNT;

}

export default Type;