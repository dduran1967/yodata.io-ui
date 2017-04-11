// @flow

import check from 'check-types';
import flatten from 'lodash/fp/flatten';
import flow from 'lodash/fp/flow';
import keys from 'lodash/fp/keys';
import map from 'lodash/fp/map';
import reverse from 'lodash/fp/reverse';
import $rdf, {
  IndexedFormula,
  NamedNode,
  Node,
  Statement,
  Literal,
  BlankNode,
} from 'rdflib';
import uuid from 'uuid/v1';
import root from 'window-or-global';
import context from '../schema/context.js';
import getUrlNamespace from './util/getUrlNamespace';
import debrac from './util/debrac';
import shrinkUrl from './util/shrinkUrl';
import shrinkRdfNode from './util/shrinkRdfNode';

type SorN = string | Node;

const checkType = check.assert;

export {getUrlNamespace};
export {debrac};

type Term = NamedNode | BlankNode | Literal;

export function isTermInstance(value: any) {
  return value instanceof NamedNode ||
    value instanceof BlankNode ||
    value instanceof Literal;
}

export function termFromValue(value: string | Term, context?: Object): Term {
  if (isTermInstance(value)) {
    return value;
  }
}

export function sym(v: any, context: Object = {}): NamedNode {
  if (typeof v === 'string') {
    if (context.hasOwnProperty(v)) {
      return context[v];
    }
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
    const str = typeof uri === 'object' ? uri.value : uri;
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
    return currentValue.includes(value)
      ? currentValue
      : currentValue.push(value);
  }

  return [currentValue, value];
}

export const find = (kb: IndexedFormula) =>
  (
    subject: NamedNode | string,
    predicate: NamedNode | string,
    object: NamedNode | string,
    graph: NamedNode | string,
  ): Array<Statement> => {
    checkType.instance(kb, IndexedFormula);
    if (subject) {
      checkType.instance(
        subject,
        NamedNode,
        'find subject expects input type of NamedNode',
      );
    }
    if (predicate) {
      checkType.instance(
        predicate,
        NamedNode,
        'find predicate expects input type of NamedNode',
      );
    }
    if (object) {
      checkType.instance(
        object,
        Node,
        'find object expects input type of Node',
      );
    }
    if (graph) {
      checkType.instance(graph, Node, 'find graph expects input type of Node');
    }
    return kb.match(subject, predicate, object, graph);
  };

export const findSubject = (graph: IndexedFormula) =>
  (subject: string) => {
    return graph.match(sym(subject));
  };

export function toJson(statements: Array<Statement>): Object {
  return statements.reduce(jsonReducer, {});
}

export const jsonReducer = (doc: Object = {}, statement: Statement) => {
  let {subject, predicate, object} = statement;

  if (!doc[subject]) {
    doc[subject] = {id: typeof subject === 'string' ? subject : subject.value};
  }

  if (!doc[subject][predicate]) {
    doc[subject][predicate] = [];
  }

  doc[subject][predicate].push(object);
  return doc;
};

export const mapStatementToContext = (
  statement: Statement,
  context: Object,
  vocab?: string,
  shrinkLiterals?: false,
) => {
  if (!context) return statement;
  let transform = createContextTransformer(context, vocab, shrinkLiterals);
  return {
    subject: transform(statement.subject),
    predicate: transform(statement.predicate),
    object: transform(statement.object),
    graph: statement.graph,
  };
};

export const statementToContext = (
  context: Object,
  vocab?: string,
  shrinkLiterals?: boolean,
) => {
  const transform = createContextTransformer(context, vocab, shrinkLiterals);
  return (st: Statement) => ({
    subject: transform(st.subject),
    predicate: transform(st.predicate),
    object: transform(st.object),
    graph: st.graph,
  });
};

export const predicateToContext = (context: Object, vocab?: string) => {
  let transform = createContextTransformer(context, vocab);
  return (st: Statement) => ({
    subject: st.subject,
    predicate: transform(st.predicate),
    object: st.object,
    graph: st.graph,
  });
};

export const propertiesOf = (kb: IndexedFormula) =>
  (subject: NamedNode): Array<NamedNode> => {
    check.assert.instance(kb, IndexedFormula);
    check.assert.instance(subject, NamedNode);
    return kb.each(null, kb.namespace.rdfs('domain'), subject).sort();
  };

export const transitiveClosure = (kb: IndexedFormula) =>
  (
    subject: NamedNode,
    predicate: NamedNode,
    inverse: ?boolean = false,
  ): Array<NamedNode> => {
    check.assert.instance(subject, NamedNode);
    check.assert.instance(predicate, NamedNode);
    check.assert.boolean(inverse);
    return kb.transitiveClosure({[subject]: true}, predicate, inverse);
  };

export const superTypesOf = (kb: IndexedFormula) =>
  (subject: NamedNode): Array<NamedNode> => {
    check.assert.instance(kb, IndexedFormula);
    check.assert.instance(subject, NamedNode);
    return flow(
      subject => transitiveClosure(kb)(subject, context.subClassOf, false),
      keys,
      map(id => kb.fromNT(id)),
      reverse,
    )(subject);
  };

export const subTypesOf = (kb: IndexedFormula) =>
  (subject: NamedNode): Array<NamedNode> => {
    check.assert.instance(kb, IndexedFormula);
    check.assert.instance(subject, NamedNode);
    return flow(
      subject => transitiveClosure(kb)(subject, context.subClassOf, true),
      keys,
      map(id => kb.fromNT(id)),
      reverse,
    )(subject);
  };

export const propertiesOfDeep = (kb: IndexedFormula) =>
  (subject: string): Array<NamedNode> => {
    return flow(sym, superTypesOf(kb), map(propertiesOf(kb)), flatten)(subject);
  };

export const toContext = (statements: Statement[], ctx: Object) => {
  return statements.map(st => mapStatementToContext(st, ctx));
};

export function termToContext(term: Term, context, vocab, shrinkLiterals) {
  switch (term.termType) {
    case 'NamedNode':
      if (vocab && term.value.startsWith(vocab)) {
        return term.value.slice(vocab.length);
      }
      if (context && context[term]) {
        return context[term];
      }
      return term.uri;
    case 'BlankNode':
      return term.value;
    case 'Literal':
      if (shrinkLiterals) {
        return term.value;
      }
      return term;
    default:
      return term;
  }
}

export const createContextTransformer = (
  context: Object = {},
  vocab: string = '',
  shrinkLiterals: boolean = false,
) => {
  return function(term: Term) {
    return termToContext(term, context, vocab, shrinkLiterals);
  };
};

export const serialize = (sts: Statement[], config: ?Object) => {
  //target, kb, base, contentType, callback
};

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
  transitiveClosure,
  getUrlNamespace,
  debrac,
  shrinkUrl,
  shrinkRdfNode,
  isTermInstance,
  createContextTransformer,
};

export default rdfu;

root.$rdf = $rdf;
root.rdfu = rdfu;
root.sym = sym;
