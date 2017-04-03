// @flow
import Chance from 'chance'
let fake = new Chance();
import times from 'lodash/times';


export class Property {
  id: string = fake.url()
  type: string = fake.word()
  label: string = fake.word()
  description: string = fake.sentence()
}

export class Action {
  id: string = fake.url()
  type: string = fake.word()
  label: string = fake.word()
  description: string = fake.paragraph()
  property: Array<Property> = times(5, new Property)
}

export default Action;
