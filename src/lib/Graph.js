// @flow
import uniq from 'lodash/uniq';
import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import getProperty from 'lodash/fp/property'
import reduce from 'lodash/fp/reduce'
import $rdf, {IndexedFormula, Statement} from 'rdflib'
import {context, CONTEXT_IN, NAMESPACE, sameAs, NS_PREFIX} from '../schema/context.js'
import {
  find,
  findSubject,
  jsonReducer,
  lit,
  mapStatementToContext,
  predicateToContext,
  propertiesOf,
  propertiesOfDeep,
  subTypesOf,
  superTypesOf,
  sym,
  toJson,
  getUrlNamespace
} from './rdf-utilities'

const TYPE = NAMESPACE.rdf('type')
const CLASS = NAMESPACE.rdfs('Class')

export class Graph extends IndexedFormula {
  constructor() {
    super();
    this.init();
    this.context = context;
    this.inContext = CONTEXT_IN;
    this.namespace = {...NAMESPACE};
    this.equateAll(sameAs);
  }

  init() {
    $rdf.fetcher(this);
  }

  /**
   * fetch and load the target URL into the current store.
   * @param {string} url - the targer URL
   * @returns {promise} */
  fetch(url: string) {
    return this.fetcher.load(url)
  }

  find = find(this)

  findSubject = findSubject(this)

  subTypesOf = subTypesOf(this)

  superTypesOf = superTypesOf(this)

  findTypes = () => {
    return this.each(null, TYPE, CLASS).sort().map(this.findOne)
  }

  findActions = () => {
    let action = this.context.Action;
    return this.subTypesOf(action).sort().map(this.findOne)
  }

  equateAll(pairs: [string, any]) {
    pairs.forEach(([a, b,]) => this.equate(a, b))
  }

  hasGraph = (iri: string) => {
    return (!!this.whyIndex[iri]);
  }

  propertiesOf = propertiesOf(this);

  propertiesOfDeep = propertiesOfDeep(this)

  mapToContext = (statement: Statement) => {
    let ctx = this.inContext;
    return mapStatementToContext(statement, ctx);
  }

  parse = (data: string, contentType: string) => {
    return $rdf.parse(data, this, 'http://schema.org/', 'text/n3');
  }

  toJSON = (statements: Statement[]) => {
    let sts = statements || this.statements;

    sts = sts.map(this.mapToContext);
    return toJson(sts);
  }

  /**
   * returns JSON representation with the subject URL as the ROOT
   * @param {string} url - target URL
   * @returns {object}
   */
  findOne = (url: string) => {
    return flow(
      sym,
      findSubject(this),
      map(predicateToContext(this.inContext)),
      reduce(jsonReducer, {}),
      getProperty(sym(url))
    )(url)
  }

  getSubject = (uri: string) => {
    if (uri) {
      let subjectNode = sym(uri);
      let props = this.findOne(subjectNode);
      return {
        id:          uri,
        type:        props.type,
        label:       lit(props.label),
        description: lit(props.description),
        superTypes:  this.superTypesOf(subjectNode).map(this.findOne),
        properties:  this.propertiesOfDeep(subjectNode).map(this.findOne),
      }
    }
    throw new Error(`subject with uri ${uri} not found.`)
  }

  checkNamespaces() {
    let subjectNamespaces = Object.keys(this.subjectIndex).map(getUrlNamespace);
    let predicateNamespaces = Object.keys(this.predicateIndex).map(getUrlNamespace);
    let objectNamespaces = Object.keys(this.objectIndex).map(getUrlNamespace);
    let allNamespaces = [...subjectNamespaces, ...predicateNamespaces, ...objectNamespaces ]
    let uniqueNamespaces = uniq(allNamespaces);
    return uniqueNamespaces.reduce((a,v) => ({...a,[v]: NS_PREFIX[v]}), {})
  }

}

export function graph() {
  return new Graph()
}

export default Graph;

