import {connect} from 'react-redux'

export const withReactions = connect(
  (state) => ({
    reaction: state.reaction
  })
)

export default withReactions