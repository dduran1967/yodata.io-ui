// @flow

import check from 'check-types';

export default function getChannelBasePath(uid: string): string {
  check.assert.string(uid);
  return `/user/${uid}/channel`
}