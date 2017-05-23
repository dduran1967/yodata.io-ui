import { connect } from 'react-redux';
import waitForUser from '../user/waitForUser.js';
import { getAction } from '../services/action_service.js';
import { subscribe } from './dbActions';
import {compose, lifecycle} from 'recompose';

const subscribeTo = getRefs =>
  compose(
    waitForUser,
    connect(
      ({ db, user, router }, ownProps) => ({
        user: user,
        route: router.route,
        data: db[router.route.path]
      }),
      {
        subscribe: getAction('subscribe')
      }
    ),
    lifecycle({
      componentDidMount() {
        this.props.dispatch(getAction('subscribe')(getRefs(this.props)));
      }
    })
  );

export default subscribeTo

export const withSubscription = (name, url) => {
  console.log({name,url})
  if (name && url) {
    return compose(
      connect(state => ({
        [name]: state.db[name]
      })),
      lifecycle({
        componentDidMount() {
          this.props.dispatch(subscribe(name, url));
        }
      })
    );
  }
  return null
};

export const withSubscriptionHoc = props => {
  let { name, url } = props();
  return withSubscription(name, url);
};
