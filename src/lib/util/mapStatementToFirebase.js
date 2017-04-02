// @flow

import {Statement} from 'rdflib'
import bsf from './base64urlEncode'

type FirebaseEncodedRdfStatement = {
  entity: string,
  attribute: string,
  value: string,
  log: {
    t: number,
    v: string,
    w: string
  }
}

export default function mapStatementToFirebase(statement: Statement): FirebaseEncodedRdfStatement {
  let entity = bsf.encode(statement.subject.toNT())
  let attribute = bsf.encode(statement.predicate.toNT())
  let path = bsf.encode(statement.subject.toNT() + '/' + statement.predicate.toNT())
  let value = statement.object.toNT();
  let log = {
    t: Date.now(),
    v: statement.object.toNT(),
    w: statement.why.toNT()
  }
  return {
    entity,
    attribute,
    value,
    log,
  }
}
