import React from 'react';
import AWS, {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";

const region = 'us-west-2';
const IdentityPoolId = 'us-west-2:86cb28d9-9a09-4b36-8c29-a9d3fc552110';
const UserPoolId = 'us-west-2_DCTKzkysP';
const ClientId = '7kt6jq97d4m5ud6j5473m1dhtm';

Config.region = region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: IdentityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: UserPoolId,
  ClientId: ClientId,
});

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      preferred_username: ''
    };
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleUsernameChange(e){
    this.setState({preferred_username: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const preferred_username = this.state.preferred_username;
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      })
    ];

    userPool.signUp(preferred_username, password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('user name is ' + result.user.getUsername());
      console.log('call result: ' + result);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
               value={this.state.preferred_username}
               placeholder="Username"
               onChange={this.handleUsernameChange.bind(this)}/>
        <input type="text"
               value={this.state.email}
               placeholder="Email"
               onChange={this.handleEmailChange.bind(this)}/>
        <input type="password"
               value={this.state.password}
               placeholder="Password"
               onChange={this.handlePasswordChange.bind(this)}/>
        <input type="submit"/>
      </form>
    );
  }
}

export default SignUpForm;
