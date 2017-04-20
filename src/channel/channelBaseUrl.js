// @flow
import check from 'check-types'

export default function channelBaseUrl(state: ChannelState, uid: string): string {
  let baseUrlTemplate = state._config.baseUrlTemplate;
  check.assert.string(uid);
  check.assert.string(baseUrlTemplate);
  return baseUrlTemplate.replace('{uid}', uid)
}
