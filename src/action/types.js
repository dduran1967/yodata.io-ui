// @flow

type Thing = {
  id: string,
  url: string
}

export type ActionInstance = {
  type: string,
  actionStatus: string,
  agent: Thing,
  object: Thing,
  subject: Thing,
  instrument: Thing,
}
