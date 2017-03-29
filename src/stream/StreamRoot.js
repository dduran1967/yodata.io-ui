import React from 'react'
import {Debug} from '../component'
import withStreams from './withStreams'


const StreamRoot = props =>
  <div>
    <Debug {...props}/>
  </div>

import {compose} from 'recompose';
import {lifecycle} from 'recompose';


import {fetchStreamList} from './streamActions'


export default compose(
  withStreams,
  lifecycle({
    componentDidMount() {
      this.props.dispatch(fetchStreamList("https://devtest.yodata.me/stream/"));
    }
  })
)(StreamRoot)
