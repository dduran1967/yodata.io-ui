import {connect} from 'react-redux'
import userActions from './user-actions'

const withUser = connect(
  state => ({user: state.user}),
  {
    ...userActions
  }
)

export default withUser
