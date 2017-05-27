import t from 'tcomb-validation';
import createStamp from 'stampit';
import keys from 'lodash/keys';

const THING = t.struct(
  {
    type: t.String
  },
  'Thing'
);

// validation properties
const PROP_TYPES = {
  '@context': t.Any,
  '@id': t.maybe(t.String),
  type: t.String,
  actionStatus: t.maybe(
    t.enums.of([
      'ActiveActionStatus',
      'CompletedActionStatus',
      'FailedActionStatus'
    ])
  ),
  agent: t.maybe(THING),
  object: THING,
  instrument: t.maybe(THING),
  participant: t.maybe(t.list(THING)),
  result: t.maybe(THING),
  error: t.maybe(THING),
  startTime: t.maybe(t.Date),
  endTime: t.maybe(t.Date),
  target: t.maybe(THING),
  targetCollection: t.maybe(THING)
};

const ACTION = t.struct(PROP_TYPES);

const validateAction = action => {
  return t.validate(action, ACTION);
};

const cleanAction = (action: Action): Action => {
  return action;
};

const createAction = (type: string): Action => {
  return {};
};

function createValidator({ properties, required }) {
  t.assert(t.Object(properties));
  t.assert(t.Array(required));
  const validator = {};
  keys(properties).forEach(key => {
    if (properties.hasOwnProperty(key)) {
      let value = properties[key];
      validator[key] = required.includes(key) ? value : t.maybe(value);
    } else {
      throw new Error(`unknown property ${key}`);
    }
  });
}

export const ActionFactory = createStamp({
  properties: {
    type: 'Action',
    context: {},
    struct: ACTION,
    required: [],
    propTypes: { ...PROP_TYPES }
  },
  methods: {
    clean: cleanAction,
    transform: cleanAction,
    validate: validateAction,
    create(action) {
      return { ...action, type: this.type };
    }
  },
  init(props, { instance }) {
    Object.assign(this, props);
  }
});

export const searchAction = ActionFactory.props({
  type: 'SearchAction',
  required: ['object']
});

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
  middleware = {};
  actions = {};

  register(id, handler) {
    this.actions[id] = handler;
  }

  registerActions(actionMap) {
    Object.assign(this.actions, actionMap);
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
