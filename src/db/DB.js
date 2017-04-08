// @flow

import axios from 'axios'
import base64url from 'base64-url'


class DB {
  host: string = 'yodata-1115.firebaseio.com';
  protocol: string = 'https:';
  root: string = '/';

  get origin(): string {
    return `${this.protocol}//${this.host}`
  }

  get url(): string {
    return `${this.protocol}//${this.host + this.root}`
  }

  encodeKey = (iri: string) => {
    let url = new URL(iri, this.origin);
    return base64url.encode(url.origin + url.pathname)
  }

  decodeKey = (value: string): string => base64url.decode(value)

  fetch = (id: string) => axios(id)
}

export default DB