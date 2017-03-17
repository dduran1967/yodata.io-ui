import {connect} from 'react-redux'
import streamActions from './streamActions'
import {withProps, compose} from 'recompose'


const withStreams = compose(
  withProps({
    isLoaded: false
  }),
  connect(
    (state, ownProps) => ({
      stream: state.stream,
      ...ownProps
    }),
    {
      ...streamActions
    }
  )
)

export default withStreams;