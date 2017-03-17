import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions as router} from 'redux-router5'
import {selectStream} from './streamActions'
import List from '../component/List'
import {PageHeader} from '../component'



function StreamList({items, navigateTo, selectStream}) {
  const listItems = items.map(item => ({
    key:         item.id,
    id:          item.id,
    label:       item.name,
    description: item.description,
    url:         item.url
  }));

  const handleClick = (item) => {
    selectStream(item);
    navigateTo("stream/view", {name: item.label})
  }

  return (
    <div>
      <PageHeader title="Streams"/>
      <List listItems={listItems} onClick={handleClick}/>
    </div>
  )
}

export default connect(
  state => ({items: state.stream.items}),
  dispatch =>
    bindActionCreators(
      {
        navigateTo:   router.navigateTo,
        selectStream: selectStream
      },
      dispatch
    )
)(StreamList);
