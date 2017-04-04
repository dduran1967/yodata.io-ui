import values from 'lodash/values'
import React from 'react'
import {compose, withHandlers} from 'recompose'
import {Button, Header, Message, Segment} from 'semantic-ui-react'
import {CardList} from '../component'
import subscribeTo from '../db/subscribeTo'
import {createChannel} from './channelActions'

const enhance = compose(
  subscribeTo(props => [props.route.path]),
  withHandlers({
    createChannel: ({dispatch}) => event => dispatch(createChannel())
  })
)

const ChannelRoot = enhance(({listItems, createChannel, navigateTo, dispatch, data}) =>
  <div className="ui grid">
    <div className="column">
      <Segment clearing basic={true}>
        <Button basic icon={'add'} floated={'right'} onClick={createChannel}/>
        <Header as="h2" floated={'left'}>Channels</Header>
      </Segment>
      <Segment basic={true}>
        <Message basic>Use channels to integrate apps that share a common domain such as contacts, blog or
          calendar.</Message>
      </Segment>
      <Segment basic={true}>
        <CardList
          items={values(data && data.item)}
          onClick={item => {
            navigateTo('channel/view', {key: item.label})
          }
          }/>
      </Segment>
    </div>
  </div>
)

export default ChannelRoot
