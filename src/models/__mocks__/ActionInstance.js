import Chance from 'chance'
import Person from './Person'
import type {Thing} from './Thing'

let fake = new Chance();

export default class ActionInstance {
  id: string = fake.guid()
  type: string = 'Action'
  actionStatus: string = 'CompletedActionStatus'
  agent: Person = new Person
  subject: string = fake.url()
  object: Thing = new Thing()

  constructor(props) {
    Object.assign(this, props);
  }
}