// @flow

import React from 'react'
import {compose, mapProps, withHandlers, withState} from 'recompose'
import withStreams from '../stream/withStreams.js'

const ChannelEvent = ({id, label, item, showContent, onHeaderClick}) =>
  <div key={id} style={{marginBottom: '.5em'}}>
    <div className="ui top attached menu">
      <div className="text item">{label}</div>
      <div className="right menu">
        <a className="item" onClick={event => onHeaderClick(event)}>
          <i className={'icon caret ' + (showContent ? 'down' : 'left')}></i>
        </a>
      </div>
    </div>
    {showContent && item &&
    <div className="ui bottom attached secondary message small">
      <pre><code>{JSON.stringify(item, null, 2)}</code></pre>
    </div>
    }
  </div>

const withShowContentToggle = compose(
  withState('showContent', 'setShowContent', false),
  withHandlers({
    toggleShowContent: ({showContent, setShowContent}) => () => {
      setShowContent(!showContent);
    }
  })
)

const enhance = compose(
  mapProps(props => ({
    id:           props.item.value,
    label:        props.item.value,
    item:         props.stream[props.item.value],
    fetchMessage: props.fetchMessage
  })),
  withShowContentToggle,
  withHandlers({
    onHeaderClick: props => event => {
      event.preventDefault()
      props.toggleShowContent()
      props.fetchMessage(props.id)
    }
  }),
)

const EventListItem = enhance(ChannelEvent)

const EventList = ({items = [], stream, fetchMessage, ...props}) =>
  <div>
    {items.map(item => EventListItem({...{item, stream, fetchMessage}}))}
  </div>

export default withStreams(EventList)
