// @flow

import Chance from 'chance';
import mapValues from 'lodash/mapValues';

const fake = new Chance();

type Thing = {
  type: string,
  id: string,
};

type ActionStatusType =
  | 'ActiveActionStatus'
  | 'CompletedActionStatus'
  | 'FailedActionStatus'
  | 'PotentialActionStatus';

export default class Action {
  id: string;
  type: string;
  label: string;
  description: string;
  uri: string;
  example: [];
  _store: any;
  _properties: {
    type: string,
    id: string,
    agent: Thing,
    object: Thing,
    instrument: Thing,
    actionStatus: ActionStatusType,
    startTime: string,
    endTime: string,
  };

  constructor(type: string) {
    this.type = type;
  }

  mockProperties = {
    type: () => this.type,
    agent: () => ({
      type: 'Person',
      id: fake.url(),
      name: fake.name(),
      email: fake.email(),
      telephone: fake.phone(),
    }),
    object: () => ({
      type: 'Website',
      id: 'yourwebsite.com',
    }),
    actionStatus: () => 'CompletedActionStatus',
  };

  mock() {
    return mapValues(this.mockProperties, value => value());
  }

  static fromJsonValue(json: Object) {
    let instance = new Action(json.type);
    Object.assign(instance, json);
    return instance;
  }

  static create(type: string) {
    return new Action(type);
  }
}
