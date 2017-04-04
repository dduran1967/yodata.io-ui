// @flow

import type {Thing} from './Thing'

export type StandardAction = {
  type: string,
  payload: any,
  meta: any
}

export type Action = {
  id: string,
  type: string,
  actionStatus: string,
  agent: Thing,
  object: Thing,
  subject: Thing,
  instrument: Thing,
}


