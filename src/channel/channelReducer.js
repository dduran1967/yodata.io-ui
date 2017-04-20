// @flow

interface ChannelState {
  _acl: any,
  _config: {
    baseUrlTemplate: string,
  },
  _meta: any,
  id: string,
  contains: Object
}

export const channelDefaultState = {
  _acl:     {},
  _config:  {
    baseUrlTemplate: '/user/{uid}/channel'
  },
  _meta:    {},
  id:       '',
  contains: {}
};

export default function channelReducer(state: ChannelState = channelDefaultState,
                                       action: FluxAction): ChannelState {
  switch (action.type) {
    case 'CHANNEL/USER_CHANNELS_ITEMS_NEXT':
      return {...state, items: action.payload};
    default:
      return state;
  }
}
