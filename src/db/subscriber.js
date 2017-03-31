import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import {subscribe} from './dbActions'

/**
 * HOC adds each ref resource to props and dispatches a db/subcribe event.
 * @param refs {array}
 */
const subscriber = compose(
  connect(
    ({db}, {refs = []}) => (refs.reduce((a, v) => Object.assign(a, {[v]: db[v]}), {}))),
  lifecycle({
    componentDidMount(){
      let {dispatch, refs} = this.props;
      dispatch(subscribe(refs))
    }
  })
)

export default subscriber
