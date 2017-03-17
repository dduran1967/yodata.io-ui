// @flow
import $rdf from 'rdflib'
import uuid from 'uuid/v1'
import {NAMESPACE} from '../schema/context.js'

const TYPE = NAMESPACE.rdf('type');
const CLASS = NAMESPACE.rdfs('Class')

export function sym(v) {
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
  throw new Error('unable to make symbol for', v);
}

export function docname(uri) {
  if (uri) {
    const str = (typeof uri === 'object') ? uri.value : uri;
    const start = str.lastIndexOf('/') + 1;
    const end = str.lastIndexOf('#');
    return end === -1 ? str.substring(start) : str.substring(start, end);
  }
  return undefined;
}

export function lit(value, defaultValue) {
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

export function forceArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === 'undefined' || value === null) {
    return [];
  }
  return new Array(value);
}

export function mergeValues(currentValue, value) {

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

export function toJson(statements = [], context = {}) {
  const doc = {};
  statements.forEach(function ({subject, predicate, object}) {
    let id = subject.value;
    let eid = context[subject] || subject.value;
    let attribute = context[predicate] || predicate;
    let value = context[object] || object;

    if (doc[eid]) {
      let currentValue = doc[eid][attribute];
      doc[eid][attribute] = mergeValues(currentValue, value);
      return;
    }
    doc[eid] = {id: id, [attribute]: value}
  });

  return doc;
}

export const mapStatementToContext = (statement, context) => {
  let {subject, predicate, object, graph} = statement;
  if (!context) return statement;
  return {
    subject:   context[subject] || subject,
    predicate: context[predicate] || predicate,
    object:    context[object] || object,
    graph:     graph
  }
}

export default {
  docname,
  lit,
  sym,
  toJson
}

window.$rdf = $rdf;
window.lit = lit;
window.toJson = toJson;
