import values from 'lodash/values'
import React from 'react'
import {compose, withHandlers, withProps} from 'recompose'
import {MediaList, Debug} from '../component'
import subscribeTo from '../db/subscribeTo'
import {createChannel} from './channelActions'


const enhance = compose(
  subscribeTo(props => [props.route.path]),
  withHandlers({
    createChannel: ({dispatch}) => event => dispatch(createChannel())
  })
)

const ChannelRoot = enhance(({listItems, createChannel, navigateTo, dispatch, data}) =>
  <div>
    <button onClick={createChannel}>create channel</button>
    <MediaList items={values(data && data.item)} onClick={item => {
      navigateTo('channel/view', {key: item.label})
    }}/>
  </div>
)

export default ChannelRoot
