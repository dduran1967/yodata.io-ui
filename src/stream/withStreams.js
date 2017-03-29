import {connect} from 'react-redux'
import streamActions from './streamActions'

export const withStreams = connect(
  ({stream}) => ({stream}),
  {
    ...streamActions
  }
)

export default withStreams;