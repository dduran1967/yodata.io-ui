import React from 'react'
import { Segment } from 'semantic-ui-react'
import Button from '../component/Button'
import Link from '../component/Link'

const Home = props => (
  <div>
    <Segment basic style={{ marginTop: '1em' }}>
      <h1>
        Yodata is an open community for developers and data wrangers creating User-Centric - aka "Decentralized" - data
        integration.
      </h1>
    </Segment>
    <Segment basic textAlign="center">
      <Button size="huge"><Link name="thrume">Quickstart</Link></Button>
    </Segment>
  </div>
);

export default Home
