// @flow

import {THRUME_BASE} from './thrume-config'

export default function getThrumeBaseUrl(uid: string): string {
  if (typeof uid === 'string') {
    return THRUME_BASE.replace('{uid}', uid);
  }
  throw new Error('uid is required', 'thrume-config')
}