import values from 'lodash/values'
import React from 'react'
import {compose, lifecycle, withProps} from 'recompose'
import {Debug, MediaList} from '../component'
import withRoute from '../router/withRoute.js'
import withUser from '../user/withUser.js'
import withChannels from './withChannels'


const listItems = [
  {
    id:          'https://devtest.yodata.me/stream/website/',
    label:       'Website',
    description: 'Tracks website events.  e.g. user subscriptions, likes/saves, feedback.',
  }
]

const ChannelRoot = props =>
  <div>
    <button onClick={props.createChannel}>create channel</button>
    <MediaList items={props.listItems} onClick={item => {
      props.navigateTo('channel/view')
    }}/>
  </div>


export default compose(
  withRoute,
  withUser,
  withChannels,
  lifecycle({
    componentDidMount() {
      let {user: {currentUser}} = this.props;
      if (currentUser) {
        this.props.fetchUserChannels(currentUser.uid)
      }
    }
  }),
  withProps(props => ({
    listItems: values(props.channel.items)
  }))
)(ChannelRoot)

