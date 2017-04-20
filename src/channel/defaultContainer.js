// @flow
import check from 'check-types'

export default function defaultContainer(uid: string): ChannelState {
  check.assert.string(uid);
  let baseUrlTemplate = '/user/{uid}/thrume/channel'
  let id = baseUrlTemplate.replace('{uid}', uid);
  return {
    _acl:     {},
    _config:  {
      baseUrlTemplate
    },
    _meta:    {},
    id,
    contains: {}
  }
}