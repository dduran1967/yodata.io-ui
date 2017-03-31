// @flow

import check from 'check-types'
import flatten from 'lodash/fp/flatten'
import flow from 'lodash/fp/flow'
import keys from 'lodash/fp/keys'
import map from 'lodash/fp/map'
import reverse from 'lodash/fp/reverse'
import $rdf, {IndexedFormula, NamedNode, Node, Statement} from 'rdflib'
import uuid from 'uuid/v1'
import root from 'window-or-global'
import context from '../schema/context.js'


type SorN = string | Node

const checkType = check.assert

export function sym(v: any): NamedNode {
  if (typeof v === 'string') {
    return v[0] === '<' ? $rdf.sym(v.slice(1, -1)) : $rdf.sym(v);
  }
  if (typeof v === 'object') {
    if (v instanceof $rdf.NamedNode) {
      return v;
    }
    if (v.termType === 'NamedNode') {
      return $rdf.sym(v.value);
    }
    if (v.id || v.url || v.uri) {
      return $rdf.sym(v.id || v.url || v.uri);
    }

  }
  if (typeof v === 'undefined') {
    return v;
  }
  throw new Error('unable to make symbol for', v);
}

export function docname(uri: string): string {
  if (uri) {
    const str = (typeof uri === 'object') ? uri.value : uri;
    const start = str.lastIndexOf('/') + 1;
    const end = str.lastIndexOf('#');
    return end === -1 ? str.substring(start) : str.substring(start, end);
  }
  throw new TypeError('docname expected a string', 'rdf-utilities.js', 28);
}

// todo: this should be more robust or broken out across functions
export function lit(value: any, defaultValue: ?any) {
  if (typeof value === 'string') {
    return value;
  }
  if (value instanceof Array) {
    return value.toString();
  }
  if (value && value.value) {
    return value.value;
  }
  return defaultValue;
}

/**
 * create a new id
 */
export function createId() {
  return uuid();
}

export function forceArray(value: any) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === 'undefined' || value === null) {
    return [];
  }
  return new Array(value);
}

export function mergeValues(currentValue: any, value: any) {

  if (typeof value === 'undefined') {
    return currentValue;
  }

  if (typeof currentValue === 'undefined') {
    return value;
  }

  if (currentValue === value) {
    return currentValue;
  }

  if (Array.isArray(currentValue)) {
    return currentValue.includes(value) ? currentValue : currentValue.push(value);
  }

  return [currentValue, value];
}

export const find = (kb: IndexedFormula) => (subject: NamedNode, predicate: NamedNode, object: Node, graph: NamedNode): Array<Statement> => {
  checkType.instance(kb, IndexedFormula)
  if (subject) {
    checkType.instance(subject, NamedNode, 'find subject expects input type of NamedNode')
  }
  if (predicate) {
    checkType.instance(predicate, NamedNode, 'find predicate expects input type of NamedNode')
  }
  if (object) {
    checkType.instance(object, Node, 'find object expects input type of Node')
  }
  if (graph) {
    checkType.instance(graph, Node, 'find graph expects input type of Node')
  }
  return kb.match(subject, predicate, object, graph)
}

export const findSubject = (graph: IndexedFormula) => (subject: string) => {
  return graph.match(sym(subject));
}

export function toJson(statements: Statement[] = [], context: Object = {}): Object {
  return toContext(statements, context).reduce(jsonReducer, {});
}

export const jsonReducer = (doc: Object = {}, statement: Statement) => {
  let {subject, predicate, object} = statement;

  if (!doc[subject]) {
    doc[subject] = {id: subject.value};
  }

  if (!doc[subject][predicate]) {
    doc[subject][predicate] = []
  }

  doc[subject][predicate].push(object);
  return doc;
}

export const mapStatementToContext = (statement: Statement, context: Object) => {
  if (!context) return statement;
  let {subject, predicate, object, graph} = statement;
  return {
    subject:   context[subject] || subject,
    predicate: context[predicate] || predicate,
    object:    context[object] || object,
    graph:     graph
  }
}

export const statementToContext = (context: Object) => {
  return (st: Statement) => ({
    subject:   context[st.subject] || st.subject,
    predicate: context[st.predicate] || st.predicate,
    object:    context[st.object] || st.object,
    graph:     st.graph
  })
}

export const predicateToContext = (context: Object) => {
  return (st: Statement) => ({
    subject:   st.subject,
    predicate: context[st.predicate] || st.predicate,
    object:    st.object,
    graph:     st.graph
  })
}

export const propertiesOf = (kb: IndexedFormula) => (subject: NamedNode): Array<NamedNode> => {
  check.assert.instance(kb, IndexedFormula);
  check.assert.instance(subject, NamedNode);
  return kb.each(null, kb.namespace.rdfs('domain'), subject).sort()
}

export const transitiveClosure = (kb: IndexedFormula) => (subject: NamedNode, predicate: NamedNode, inverse: ?boolean = false): Array<NamedNode> => {
  check.assert.instance(subject, NamedNode)
  check.assert.instance(predicate, NamedNode)
  check.assert.boolean(inverse)
  return kb.transitiveClosure({[subject]: true}, predicate, inverse)
}

export const superTypesOf = (kb: IndexedFormula) => (subject: NamedNode): Array<NamedNode> => {
  check.assert.instance(kb, IndexedFormula);
  check.assert.instance(subject, NamedNode);
  return flow(
    subject => transitiveClosure(kb)(subject,context.subClassOf,false),
    keys,
    map(id => kb.fromNT(id)),
    reverse
  )(subject)
}

export const subTypesOf = (kb: IndexedFormula) => (subject: NamedNode): Array<NamedNode> => {
  check.assert.instance(kb, IndexedFormula);
  check.assert.instance(subject, NamedNode);
  return flow(
    subject => transitiveClosure(kb)(subject,context.subClassOf,true),
    keys,
    map(id => kb.fromNT(id)),
    reverse
  )(subject)
}

export const propertiesOfDeep = (kb: IndexedFormula) => (subject: string): Array<NamedNode> => {
  return flow(
    sym,
    superTypesOf(kb),
    map(propertiesOf(kb)),
    flatten
  )(subject)
}

export const toContext = (statements: Statement[], ctx: Object) => {
  return statements.map(st => mapStatementToContext(st, ctx));
}

export const serialize = (sts: Statement[], config: ?Object) => {

  //target, kb, base, contentType, callback
}

const rdfu = {
  docname,
  lit,
  sym,
  toJson,
  toContext,
  jsonReducer,
  statementToContext,
  mapStatementToContext,
  findSubject,
  propertiesOf,
  propertiesOfDeep,
  superTypesOf,
  subTypesOf,
  transitiveClosure
}

export default rdfu;

root.$rdf = $rdf;
root.rdfu = rdfu;
root.sym = sym;