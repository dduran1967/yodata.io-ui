import values from 'lodash/values'
import React from 'react'
import {compose, withProps} from 'recompose'
import {MediaList} from '../component'
import subscribeTo from '../db/subscribeTo'
import waitForUser from '../user/waitForUser.js'


const ChannelRoot = props =>
  <div>
    <button onClick={props.createChannel}>create channel</button>
    <MediaList items={props.listItems} onClick={item => {
      props.navigateTo('channel/view', {id: item.id})
    }}/>
  </div>


export default compose(
  waitForUser,
  subscribeTo(['channel']),
  withProps(props => ({
    listItems: values(props.channel && props.channel.item)
  }))
)(ChannelRoot)


