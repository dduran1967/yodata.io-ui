import React from 'react'
import withUser from './withUser';


class UserSignup extends React.Component {
  componentDidMount() {
    if (this.props.user.currentUser === null) {
      document.location.assign('/widget.html');
    }
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default withUser(UserSignup)
