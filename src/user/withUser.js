import {connect} from 'react-redux'
import userActions from './userActions'

const withUser = connect(
  state => ({user: state.user}),
  {
    ...userActions
  }
)

export default withUser
