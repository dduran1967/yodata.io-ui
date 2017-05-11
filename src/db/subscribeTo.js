import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';
import createHelper from 'recompose/createHelper';
import waitForUser from '../user/waitForUser.js';
import {getAction} from '../services/action_service.js';

const subscribeTo = getRefs =>
  compose(
    waitForUser,
    connect(
      ({db, user, router}, ownProps) => ({
      user: user,
      route: router.route,
      data: db[router.route.path],
    }),
      {
        subscribe: getAction('subscribe')
      }
    ),
    lifecycle({
      componentDidMount() {
        this.props.dispatch(getAction('subscribe')(getRefs(this.props)));
      },
    }),
  );

export default createHelper(subscribeTo, 'subscribeTo');
