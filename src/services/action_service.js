// @flow

import {t} from 'tcomb-react';

const defaultActions = {
  AddAction: (object, targetCollection) => {
    return {
      type: 'AddAction',
      object,
      targetCollection,
    }
  },
  SubscribeAction: (name, url) => {
    t.String(name);
    t.String(url);
    return {
      type: 'DB/SUBSCRIBE',
      payload: {
        name,
        type: 'SubscribeAction',
        object: url,
      },
    }
  },
  createExampleValue: (subject, text, description) => {
    let exampleValue = {
      type: 'SoftwareSourceCode',
      exampleOfWork: `/public/schema/${subject.id}`,
      text,
      description
    }
    if (description) exampleValue.description = description;
    return {
      type: 'AddAction',
      object: exampleValue,
      targetCollection: `/public/schema/${subject.id}/exampleValue`,
      actionStatus: 'PotentialActionStatus'
    }
  }
}

class ActionService {
  constructor() {
    this.actions = defaultActions;
  }

  register(id, handler) {
    this.actions[ id ] = handler
  }

  registerActions(actionMap) {
    Object.assign(this.actions, actionMap)
  }

  getAction(id) {
    return this.actions[ id ]
  }

  call(id, ...props) {
    console.debug(id,props)
    return this.actions[ id ].call(null, ...props)
  }
}

const actionService = new ActionService()
export const getAction = (id) => actionService.getAction(id);

export default actionService
