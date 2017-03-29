export const initialState = {
  id:       '',
  items:    [],
  itemType: 'Channel',
  type:     'Container',
  url:      ''
}

export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANNEL/USER_CHANNELS_ITEMS_NEXT':
      return {...state, items: action.payload}
    default:
      return state;
  }
}

export default channelReducer
