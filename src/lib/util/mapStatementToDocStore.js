// @flow

import {Statement} from 'rdflib'
import {NS_PREFIX} from '../../schema/context.js'
import bsf from './base64urlEncode'
import getUrlNamespace from './getUrlNamespace'


type DocstoreEncodedRdfStatement = {
  entity: string,
  attribute: string,
  value: string,
  log: {
    t: number,
    v: string,
    w: string
  }
}

type NamedNode = {
  termType: 'NamedNode',
  value: string
}

type Literal = {
  termType: 'Literal',
  value: string,
  datatype?: NamedNode,
  lang: string
}

type BlankNode = {
  termType: 'BlankNode',
  value: string
}

function encodeTerm(term: NamedNode | Literal): string {
  switch (term.termType) {
    case 'NamedNode':
      return `<${bsf.encode(term.value)}>`
    case 'Literal':
      if (term.lang) {
        return `"${term.value}"@${term.lang}`
      }
      if (term.datatype && term.datatype.value) {
        return `"${term.value}"^^<${bsf.encode(term.datatype.value)}>`
      }
      return `"${term.value}"`
    default:
      return term.value
  }
}

function shrinkUrl(url: string): string {
  (url: string)
  let namespace: string = getUrlNamespace(url)
  let prefix = NS_PREFIX[namespace]
  let localName = url.substr(namespace.length)
  return `${prefix}:${localName}`
}

function shrinkTerm(term: NamedNode | Literal): string {
  switch (term.termType) {
    case 'NamedNode':
      return `<${shrinkUrl(term.value)}>`
    case 'Literal':
      if (term.lang) {
        return `"${term.value}"@${term.lang}`
      }
      if (term.datatype && term.datatype.value) {
        return `"${term.value}"^^<${shrinkUrl(term.datatype.value)}>`
      }
      return `"${term.value}"`
    default:
      return term.value
  }
}

export default function mapStatementToDocStore(statement: Statement): DocstoreEncodedRdfStatement {
  let entity = shrinkTerm(statement.subject)
  let attribute = shrinkTerm(statement.predicate)
  let value = shrinkTerm(statement.object)
  let log = {
    t: Date.now(),
    v: value,
    w: shrinkTerm(statement.why)
  }
  return {
    entity,
    attribute,
    value,
    log,
  }
}
