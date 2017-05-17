// models

const NAMESPACE_SCHEMA = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
    },
  },
}

const NAMESPACE_INITIAL_STATE = {};

// actions

export function createNamespace(name) {
  return {
    type: 'UpdateAction',
    object: {
      type: 'Namespace',
      name: name,
    },
    actionStatus: 'PendingActionStatus',
  }
}

export function updateNamepsace(namespace) {
  return {
    type: 'UpdateAction',
    object: namespace,
    actionStatus: 'PendingActionStatus',
  }

}

export function deleteNamespace(namespace) {
  return {
    type: 'DeleteAction',
    object: namespace,
    actionStatus: 'PendingActionStatus',
  }
}

export function getNamespace(name) {
  return {
    type: ''
  }

}

export function findNamespace(props) {
  return [
    {
      type: 'Namespace',
      label: 'schema',
      description: 'schema.org',
      id: '/public/schema',
      mainEntityOfPage: 'http://schema.org',
    },
  ]
}

export const drawerActions = {
  toggleDrawer,
};

// logic (action handlers)


// reducer

export const drawerReducer = (drawer = initialState, action) => {
  switch (action.type) {
    case 'DRAWER/TOGGLE_DRAWER':
    case '@@Appbar/TOGGLE_NAV':
      return { ...drawer, open: !drawer.open };
    case '@@router5/TRANSITION_SUCCESS':
      return { ...drawer, open: false };
    default:
      return drawer;
  }
};


