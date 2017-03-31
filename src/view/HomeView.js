import React from 'react'
import {compose} from 'recompose'
import {Debug} from '../component'
import {subscriber} from '../db'
import waitForUser from '../user/waitForUser.js'

const A = compose(
  waitForUser,
  subscriber,
)(Debug)

const Home = props =>
  <div>
    <A refs={['/channel', '/context']}/>
  </div>

export default Home
