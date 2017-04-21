import React from "react";
import Page from "../component/Page";
import Header from "../component/Header";
import { Segment } from "semantic-ui-react";
import Section from "../component/Section";
import Button from '../component/Button'
import {colors, scale} from '../style/config.js';
import Link from '../component/Link'

const Home = props => (
  <div>
    <Segment fluid basic style={{ marginTop: "1em"}}>
      <h1>
        Yodata is an open community for developers and data wrangers creating User-Centric - aka "Deceralized" - data integration.
      </h1>
    </Segment>
    <Segment basic textAlign="center">
      <Button size="huge"><Link name="thrume">Quickstart</Link></Button>
    </Segment>
  </div>
);

export default Home;
