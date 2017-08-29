// @flow
import React from 'react'
import { routeMap } from './routes.js'
import { connect } from 'react-redux'
import SearchResult from '../component/SearchResult'


// load state from redux
const controller = connect(state => ({
  search: state.search,
  route: state.router.route,
  user: state.user,
}));

const ViewSelector = (props, context) => {
  let { search, route, user } = props;

  if (!route) {
    return <div />
  }

  if (user.signedIn === false) {
    debugger;
    location.assign('/widget.html')
    return <div />
  }

  let view = routeMap[route.name];

  if (search && search.results.length > 0) {
    return React.createElement(SearchResult, props);
  }

  if (view && view.component) {
    return React.createElement(view.component, props);
  }

  return null;
};

export default controller(ViewSelector);
