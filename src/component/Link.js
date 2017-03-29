import React from 'react'
import {connect} from 'react-redux'
import {actions as routerActions} from 'redux-router5'
import {compose, getContext, setPropTypes, withHandlers, withProps} from 'recompose'

const {string, object} = React.PropTypes;

const enhance = compose(
  setPropTypes({
    name:      string.isRequired,
    params:    object,
    options:   object,
    className: string,
    style:     string
  }),
  connect(
    (state, ownProps) => ({
      route: state.router.route
    }),
    {
      navigateTo: routerActions.navigateTo
    }
  ),
  getContext({router: object}),
  withProps(({router, name, params}) => ({
    href: router.buildUrl(name, params)
  })),
  withHandlers({
    onClick: props => event => {
      event.preventDefault();
      props.navigateTo(props.name, props.params, props.options)
    }
  }),
)

const Link = ({href, onClick, className, style, children, ...rest}) => (
  <a {...{href, onClick, className, style}}>{children}</a>
)

export default enhance(Link);
