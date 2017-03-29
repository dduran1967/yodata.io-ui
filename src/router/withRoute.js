import {connect} from 'react-redux'
import {actions as routeActions} from 'redux-router5'

const withRoute = connect(
  ({router}) => ({
    route: router.route
  }),
  {
    ...routeActions
  }
)

export default withRoute
