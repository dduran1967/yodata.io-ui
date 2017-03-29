import React from 'react'
import {MediaList, withRoute, withStreams} from '../component';
import {withHandlers, compose, lifecycle} from 'recompose';


const listItems = [
  {
    id: 'https://devtest.yodata.me/stream/website/',
    label: 'Website',
    description: 'Tracks website events.  e.g. user subscriptions, likes/saves, feedback.',
  }
]

const ChannelRoot = props =>
<div>
  <button onClick={props.addStream}>create stream</button>
  <MediaList items={listItems} onClick={item => {props.navigateTo('channel/view')}} />
</div>


export default compose(
  withRoute,
  withStreams,
  lifecycle({
    componentDidMount() {
      this.props.fetchStreamList()
    }
  })
)(ChannelRoot)
