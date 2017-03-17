// @flow
import $rdf, {IndexedFormula, Fetcher} from 'rdflib'
import {NAMESPACE, context, CONTEXT_IN} from '../schema/context.js'
import {mapStatementToContext, toJson} from './rdf-utilities'
import {compose} from 'lodash/fp'

const TYPE = NAMESPACE.rdf('type');
const PROPERTY = NAMESPACE.rdf('property')
const CLASS = NAMESPACE.rdfs('Class')


export class Graph extends IndexedFormula {
  constructor() {
    super();
    this.init();
    this.context = context;
    this.inContext = CONTEXT_IN;
  }

  init() {
    $rdf.fetcher(this);
  }

  fetch(iri) {
    return this.fetcher.load(iri)
  }

  find(subject, predicate, object, graph) {
    return this.match(subject, predicate, object, graph);
  }

  findSubject(subject: Node) {
    return this.subjectIndex[subject];
  }

  subTypesOf = type => {
    let subTypes = this.findSubClassesNT(type);
    return Object
    .keys(subTypes)
    .map(id => this.fromNT(id));
  }

  superTypesOf = (subject) => {
    if (subject) {
      let superTypes = this.findSuperClassesNT(subject);

      return Object.keys(superTypes).map(id => this.fromNT(id)).reverse();
    }
    return [];
  }

  findTypes = () => {
    return this.each(null, TYPE, CLASS).sort().map(this.findOne)
  }

  findActions = () => {
    let action = this.context.Action;
    return this
    .subTypesOf(action)
    .sort()
    .map(this.findOne)
  }

  hasGraph = (iri: string) => {
    return (!!this.whyIndex[iri]);
  }

  mapToContext = (statement) => {
    let ctx = this.inContext;
    return mapStatementToContext(statement, ctx);
  }

  findOne = subject => {
    let context = this.inContext;
    return this.findSubject(subject)
               .map(this.mapToContext)
               .reduce((a, b) => {
                 let {predicate, object} = b;
                 if (!a[predicate]) {
                   a[predicate] = [];
                 }
                 a[predicate].push(object);
                 return a;
               }, {
                 id: (subject && subject.value) || null
               })
  }

  toJSON = (arrayOfStatements) => {
    let sts = arrayOfStatements || this.statements;
    sts = sts.map(this.mapToContext);
    return toJson(sts);
  }

}

export function graph() {
  return new Graph()
}

export default Graph;

