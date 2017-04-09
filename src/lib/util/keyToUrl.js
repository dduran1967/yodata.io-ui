// @flow

import bt from './base64urlEncode';

export default function keyToUrl(key: string): string {
  return bt.decode(key);
}
