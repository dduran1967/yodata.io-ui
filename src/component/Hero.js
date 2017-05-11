import React from 'react'
import {Button, Input, Segment} from 'semantic-ui-react'
import {compose, withState} from 'recompose'

const Hero = props =>
  <Segment vertical inverted color="grey" style={{height: '50vh', padding: '8.75%'}}>
    <h1 style={{
      fontSize: '5.875em',
    }}>{props.title}</h1>
    <Input
      name="email"
      size="huge"
      placeholder="Email address"
      value={props.email}
      onChange={e => props.setEmail(e.target.value)}
    />
    <Button
      content="Get Started"
      size="huge"
      style={{marginLeft: '12px'}}
      onClick={event => props.onSubmit(event, props.email)}
    />
  </Segment>

const container = compose(
  withState('email', 'setEmail', ''),
)

module.exports = container(Hero)
