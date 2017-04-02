// @flow

import base64url from 'base64-url'
import store from '../store'
import {dbGet} from './dbActions'

class DB {
  host: string = 'dave.yodata.me';
  protocol: string = 'https:';
  root: string = '';

  constructor(baseURL: string = 'https://yodata-1115.firebaseio.com/') {
    let url = new URL(baseURL)
    this.host = url.host
    this.protocol = url.protocol;
    this.root = url.pathname;
  }

  get origin(): string {
    return `${this.protocol}//${this.host}`
  }

  encodeKey = (iri: string) => {
    let url = new URL(iri, this.origin);
    return base64url.encode(url.origin + url.pathname)
  }

  decodeKey = (value: string): string => base64url.decode(value)

  fetch = (id: string): void => store.dispatch(dbGet(id))

}

export default DB