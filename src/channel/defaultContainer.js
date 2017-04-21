// @flow
import check from 'check-types'
import getChannelBasePath from './channelBasePath.js'

interface ChannelContainer {
  type: 'Container',
  kind: 'ChannelContainer',
  id: string,
  url: string,
  label: string,
  contains: Array<Channel>
}

function createChannelContainer(uid: string): ChannelContainer {
  check.assert.string(uid);
  return {
    id: getChannelBasePath(uid),
    type: 'Container',
    kind: 'ChannelContainer',
    label: 'channel',
    description: 'Channels provide filter and granular distribution permissions management.',
    contains: [],
  }
}

export default createChannelContainer