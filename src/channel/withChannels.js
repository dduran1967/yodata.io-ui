import {connect} from 'react-redux'
import channelActions from './channelActions'

const withChannels = connect(
  ({channel}) => ({channel}),
  {
    ...channelActions
  }
)

export default withChannels;