import {connect} from 'react-redux'
import {compose, lifecycle, withProps} from 'recompose'
import createHelper from 'recompose/createHelper'
import waitForUser from '../user/waitForUser.js'
import {subscribe} from './dbActions'

const subscribeTo = getRefs => compose(
  waitForUser,
  connect(
    ({db, user, router}, ownProps) => ({
      user:  user,
      route: router.route,
      data:  db[router.route.path],

    })
  ),
  lifecycle({
    componentDidMount(){
      this.props.dispatch(subscribe(getRefs(this.props)))
    }
  })
)

export default createHelper(subscribeTo, 'subscribeTo')

