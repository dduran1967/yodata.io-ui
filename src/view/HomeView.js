import React from 'react'
import Transition from 'react-motion-ui-pack'
import {compose, withHandlers, withState} from 'recompose'
import {Card, Message, Rail, Grid} from 'semantic-ui-react'
import withToggle from '../component/withToggle.js';
import Debug from '../component/Debug.js';

const withShowContentToggle = compose(
  withState('showMessage', 'setShowMessage', false),
  withHandlers({
    toggleShowContent: ({showMessage, setShowMessage}) => () => {
      setShowMessage(!showMessage);
    }
  })
)
const CardGroup = withShowContentToggle(({showMessage, setShowMessage, toggleShowContent}) =>
  <div>
    <Card
      header={"card header"}
      meta={"meta one, meta two"}
      fluid={true}
      raised={true}
      onClick={() => toggleShowContent()}
    />
    <Transition
      component="div"
      enter={{
        opacity:    1,
        translateY: 0
      }}
      leave={{
        opacity:    0,
        translateY: -60
      }}
    >{showMessage &&
    <Message
      attached={'top'}
      info={true}
      content={"lorem alaldadl aljflaksjfljasklfjalskjfkasld"}
    />}
    </Transition>

  </div>
)

const Home = props =>
  <div>
    <h1>home</h1>
  </div>

export default Home

