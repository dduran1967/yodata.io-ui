import {compose} from 'recompose';
import withUser from './withUser';
import {withLoader} from '../component/Loading.js';

export default compose(
  withUser,
  withLoader(({user}) => !(user.signedIn))
)