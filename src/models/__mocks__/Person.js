// @flow

import Chance from 'chance'
let chance = new Chance();

export default class Person {
  id: string = chance.url()
  type: 'Person'
  email: string = chance.email()
  telephone: string = chance.phone()
  givenName: string = chance.first()
  familyName: string = chance.last()
}