// @flow

import t from 'tcomb';

const actionSchema = {
  type: 'object',
  properties: {
    actionStatus: {
      type: 'string',
      enum: [
        'ActiveActionStatus',
        'PotentialActionStatus',
        'CompletedActionStatus',
        'FailedActionStatus'
      ]
    },
    agent: {
      type: 'object',
      properties: {
        type: 'string'
      }
    },
    endTime: {
      type: 'string',
      format: 'date-time'
    },
    startTime: {
      type: 'string',
      format: 'date-time'
    },
    error: {
      type: 'object',
      properties: {
        type: 'string'
      }
    },
    instrument: {
      type: 'object',
      properties: {
        type: 'string'
      }
    },
    location: {
      type: 'object',
      properties: {
        type: 'string'
      }
    },
    result: {
      type: 'object',
      properties: {
        type: 'string'
      }
    },
    participant: {
      type: 'object',
      properties: {
        type: 'string'
      }
    }
  }
};

const Action = t.struct(
  {
    type: t.String
  },
  'Action'
);

const UpdateAction = Action.extend(
  {
    targetCollection: t.Object
  },
  'UpdateAction'
);

const AddAction = UpdateAction.extend(
  {
    object: t.Object
  },
  'AddAction'
);

const SubscribeAction = Action.extend({}, 'SubscribeAction');

const defaultActions = {
  AddAction: (object, targetCollection) => {
    return {
      type: 'AddAction',
      object,
      targetCollection
    };
  },
  SubscribeAction: (name, url) => {
    t.String(name);
    t.String(url);
    return {
      type: 'DB/SUBSCRIBE',
      payload: {
        name,
        type: 'SubscribeAction',
        object: url
      }
    };
  },
  createExampleValue: (subject, text, description) => {
    let exampleValue = {
      type: 'SoftwareSourceCode',
      exampleOfWork: `/public/schema/${subject.id}`,
      text,
      description
    };
    if (description) exampleValue.description = description;
    return {
      type: 'AddAction',
      object: exampleValue,
      targetCollection: `/public/schema/${subject.id}/exampleValue`,
      actionStatus: 'PotentialActionStatus'
    };
  }
};

class ActionService {
  middleware = {}
  actions = {}

  register(id, handler) {
    this.actions[id] = handler;
  }

  registerActions(actionMap) {
    Object.assign(this.actions, actionMap)
  }

  getAction(id) {
    return this.actions[id];
  }

  call(id, ...props) {
    console.debug(id, props);
    return this.actions[id].call(null, ...props);
  }

  add(targetUrl: string, data: Object) {
    t.String(targetUrl);
    t.Object(data);
    return AddAction({
      type: 'AddAction',
      targetCollection: {
        url: targetUrl
      },
      object: data
    });
  }

  update(targetUrl: string, data: Object, meta?: Object) {
    t.String(targetUrl);
    t.Object(data);
    t.maybe(t.Object(meta));
    let result = UpdateAction({
      type: 'UpdateAction',
      targetCollection: {
        url: targetUrl
      },
      object: data
    });
    return { ...result, ...meta };
  }

  subscribe(name, url) {
    t.String(name);
    t.String(url);
    return {
      type: 'DB/SUBSCRIBE',
      payload: {
        name,
        type: 'SubscribeAction',
        object: url
      }
    };
  }

  action(data) {
    return Action(data);
  }
}

const actionService = new ActionService();
export const getAction = id => actionService.getAction(id);

export default actionService;
