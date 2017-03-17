import React from 'react'
import {Input, Block, Box, Flex} from './index'

class Signup extends React.Component {
  render() {
    return (
      <Block style={{width:'320px', margin:'auto'}}>
        <form style={{width: '100%'}} onSubmit={(e) => {
          e.preventDefault();
          console.log(this);
          this.props.onsubmit(e);
        }}>

          <div className="form-group has-success">
            <input
              id="preferred_username"
              className="form-control"
              type="text"
              label="Username"
              name="preferred_username"
              placeholder="username"
            />
            <span className="form-text">there is a problem</span>
          </div>

          <div>
            <Input
              className="form-control"
              name="email"
              type="email"
              label={"Email"}
              placeholder={"you@yodata.me"}
            />
          </div>
          <div>
            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
          </div>

          <Flex justify="space-between">
            <Box>
              <button className="btn btn-primary">Signup</button>
            </Box>
            <Box>
              <a href="#" className="btn btn-link">Login</a>
            </Box>
          </Flex>
        </form>
      </Block>
    )
  }
}

export default Signup;

