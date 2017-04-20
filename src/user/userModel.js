import store from '../store'
// @flow
import userActions from './user-actions'

type User = {
  uid: string,
  name: Array<string>,
  image: Array<string>,
  email: Array<string>,


}

const UserManager = () => {
  createUserWithEmailAndPassword = props => {
    return store.dispatch(userActions.createUserWithEmailAndPassword(props))
  }
}

const users = new UserManager();
export default users;