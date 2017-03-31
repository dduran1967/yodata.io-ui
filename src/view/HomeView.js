import React from 'react'
import {compose, withProps} from 'recompose'
import {Debug} from '../component'
import {subscribeTo} from '../db'
import waitForUser from '../user/waitForUser.js'
import {withUser} from '../component';


const A = compose(
  waitForUser,
  subscribeTo(['channel'])
)(Debug)

const Home = props =>
  <div>
    <A/>
  </div>

export default Home
