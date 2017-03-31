import values from 'lodash/values'
import React from 'react'
import {compose, lifecycle, withProps} from 'recompose'
import {MediaList} from '../component'
import withRoute from '../router/withRoute.js'
import withUser from '../user/withUser.js'
import withChannels from './withChannels'
import subscriber from '../db/subscriber.js';
import {withLoader} from '../component/Loading.js';



const ChannelRoot = props =>
  <div>
    <button onClick={props.createChannel}>create channel</button>
    <MediaList items={props.listItems} onClick={item => {
      props.navigateTo('channel/view', {id: item.id})
    }}/>
  </div>


export default compose(
  withUser,
  withLoader(
    props => (!(props.user && props.user.currentUser))
  ),
  withProps(props => ({
    listItems: values(props.channel.items)
  }))
)(ChannelRoot)

