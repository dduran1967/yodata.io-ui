// @flow

declare interface Resource {
  id: string
}

declare interface Thing {
  type: string
}

declare type URL = string
declare type ID = string

declare type ActionStatusType = string

declare interface Node {
  termType: 'NamedNode' | 'BlankNode' | 'Literal' | 'Collection',
  value: string,
  substitute(bindings: any): Node,
  compareTerm(Node): -1 | 0 | 1,
  equals(Node): boolean,
  hashString(): Node,
  sameTerm(Node): boolean,
  toCanonical(): string,
  toNT(): string,
}

declare type NamedNode = {
  termType: 'NamedNode',
  value: string,
};

declare type BlankNode = {
  termType: 'BlankNode',
  value: string,
};

declare type Literal = {
  termType: 'Literal',
  lang?: string,
  datatype?: NamedNode,
};


declare type User = {
  uid: string,
  name: string,
  image: string,
  email: string,
  emailVerified: boolean,
  isAnonymous: boolean,
}

declare interface ActionInterface {
  type: string,
}

declare interface FluxAction {
  +type: string,
  payload?: any,
  meta: any,
}

declare interface Action {
  +type: string,
  agent: URL | Thing,
  object: URL | Thing,
  instrument: URL | Thing,
  result: URL | Thing,
  participant: URL | Thing,
  startTime: string,
  endTime: string,
  actionStatus: ActionStatusType,
}

declare interface FirebaseUser {
  uid: string,
  displayName: string,
  photoURL: string,
  email: string,
  emailVerified: boolean,
  isAnonymous: boolean,
  providerData: Array<any>
}

declare interface SubscribeAction {
  type: 'SubscribeAction',
  name: string,
  agent: string,
  object: string,
  actionStatus: string
}