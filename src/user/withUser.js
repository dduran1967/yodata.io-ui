import {compose, defaultProps} from 'recompose'

export const withUser = compose(
  defaultProps({
    type: 'User'
  })
);

export default withUser;
