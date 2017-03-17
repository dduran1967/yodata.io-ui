import React from 'react'
import {connect} from 'react-redux'
import {routeNodeSelector} from 'redux-router5'
import StreamList from './StreamList'
import StreamView from './StreamView'

const StreamViewController = ({route}) => {
  return (
    <div>
      { route.name === 'stream.list' ? <StreamList /> : null }
      { route.name === 'stream.view' ? <StreamView route={ route }/> : null }
      { route.name === 'stream.view.action' ? <StreamView route={ route }/> : null }
    </div>
  )
}

export default connect(state => routeNodeSelector('stream'))(StreamViewController);


//<Menu effect="zoomin" method="click" position="tr">
//  <MainButton iconResting="mfb-icon add" iconActive="mfb-icon mfb-icon-add"/>
//  <ChildButton label="view" href="#">add</ChildButton>
//</Menu>