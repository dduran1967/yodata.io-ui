import {observable, extendObservable, action, computed} from 'mobx'
import {invert, get as getValue, set as setValue} from 'lodash'
import $rdf from 'rdflib'
import CONTEXT, {sameAs as SAMEAS, NAMESPACE} from '../schema/context'
import {sym, mergeValues, lit} from '../lib/rdf-utilities'
import {Graph} from '../lib/Graph.js';
import Type from '../type/Type'

type NamedNode = {
  termType: "NamedNode",
  value: string
}
type NamedNodeMap = {
  [key : string]: NamedNode
};

class TypeStore {
  graph: Graph
  fetcher: $rdf.Fetcher
  loading: boolean
  context: NamedNodeMap
  inverseContext: {[key:string]:string}
  namespace: {[key:string]: Function}
  statements: Array<Object>

  constructor() {
    this.graph = new Graph();
    this.fetcher = $rdf.fetcher(this.graph);
    this.context = {
      ...CONTEXT
    };
    this.namespace = {
      ...NAMESPACE
    };
    this.equateAll(SAMEAS);
    extendObservable(this, {
      loading:          true,
      statements:       [],
      filter:           '',
      matches:          [],
      currentSubjectId: undefined,
      ready:            computed(() => !this.loading),
      currentSubject:   computed(function () {
        if (this.currentSubjectId && this.ready) {
          let id = this.currentSubjectId;
          let props = this.findOne(id);
          return {
            ...props,
            id:         id,
            superTypes: this
                        .superTypesOf(id)
                        .map(this.findOne),
            properties: this
                        .propertiesOfDeep(id)
                        .map(this.findOne),
          }
        }
        return undefined;
      }),
      inverseContext:   computed(function (): {[key:string]:string} {
        return invert(this.context);
      }),
      list:             computed(function () {
        let ns = this.namespace;
        let type = ns.rdf('type');
        let Type = ns.rdfs('Class');
        return this
        .statements
        .filter(st => (st.predicate.equals(type) && st.object.equals(Type)))
        .map(({subject}) => subject)
      }),
      json:             computed(function () {
        return this.toJson(this.matches.length > 0
          ? this.matches
          : this.statements);
      }),

      add:               action('addType', function addType(type) {
        this
        .items
        .push(type);
      }),
      fetch:             action('fetchType', function (url) {
        this.loading = true;
        this
        .fetcher
        .get(url, () => {
          this.statements = this.graph.statements;
          this.loading = false;
        })
      }),
      setCurrentSubject: action('setCurrentSubject', function (id) {
        this.currentSubjectId = sym(id)
      }),
      setFilter:         action('setFilter', function (val) {
        this.filter = val;
      }),
    });
    this.fetch('https://devtest.yodata.me/test/schema.nt');
  }

  fill = node => {
    return this.graph.subjectIndex[node];
  }

  match = (subject, predicate, object, graph) => {
    let result = this.statements;
    if (subject) {
      result = result.filter(statement => statement.subject.equals(subject))
    }

    if (predicate) {
      result = result.filter(statement => statement.predicate.equals(predicate))
    }

    if (object) {
      result = result.filter(statement => statement.object.equals(object))
    }

    if (graph) {
      result = result.filter(statement => statement.graph.equals(graph))
    }

    return result;
  }

  findOne = node => {
    return this
    .graph
    .match(node)
    .map(this.toContext)
    .reduce((a, b) => {
      let {predicate, object} = b;
      if (!a[predicate]) {
        a[predicate] = [];
      }
      a[predicate].push(object);
      return a;
    }, {
      id: (node && node.value) || null
    })
  }

  equateAll(pairs = []) {
    let g = this.graph;
    pairs.forEach(([a, b,]) => g.equate(a, b))
  }

  get types() {
    let {type, Type} = this.context;
    return this
    .graph
    .each(null, type, Type)
    .sort()
    .map(this.findOne);
  }

  get actions() {
    let action = this.context.Action;
    return this
    .subTypesOf(action)
    .sort()
    .map(this.findOne)
  }

  superTypesOf = (subject: NamedNode): Array<NamedNode> => {
    if (subject) {
      let superTypes = this
      .graph
      .findSuperClassesNT(subject);
      return Object
      .keys(superTypes)
      .map(id => this.graph.fromNT(id))
      .reverse();
    }
    console.debug('superTypesOf called with undefined subject');
    return [];
  }

  subTypesOf = type => {
    let subTypes = this.graph.findSubClassesNT(type);
    return Object
    .keys(subTypes)
    .map(id => this.graph.fromNT(id));
  }

  jsonReduce = (doc, {subject, predicate, object}) => {
    let currentValue = getValue(doc, [subject, predicate,]);
    return setValue(doc, [
      subject, predicate,
    ], mergeValues(currentValue, object));
  }

  toContext = (statement) => {
    let ctx = this.inverseContext;
    return {
      subject:   ctx[statement.subject] || statement.subject,
      predicate: ctx[statement.predicate] || statement.predicate,
      object:    ctx[statement.object] || statement.object,
    }
  }

  toJson = (statements = [], options) => {
    const doc = {};
    const opts = options || {};
    const context = opts.context || invert(CONTEXT);
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
      doc[eid] = {
        id:          id,
        [attribute]: value
      }
    });

    return doc;
  }

  propertiesOfDeep = subject => {
    if (subject) {
      return this
      .superTypesOf(subject)
      .reduce((a, b) => a.concat(this.propertiesOf(b)), [])
      .sort()
    }
    console.debug('propertiesOfDeep called with undefined subject');
    return [];
  }

  propertiesOf = subject => {
    if (subject) {
      let propertyOf = this
      .namespace
      .rdfs('domain');
      return this
      .graph
      .each(null, propertyOf, subject)
      .sort()
    }
    console.debug('propertiesOf called with undefined subject')
  }

  getSubject = uri => {
    if (!uri)
      return;
    let subjectNode = sym(uri);
    let props = this.findOne(subjectNode);
    return {
      id:          uri,
      type:        props.type,
      label:       lit(props.label),
      description: lit(props.description),
      superTypes:  this
                   .superTypesOf(subjectNode)
                   .map(this.findOne),
      properties:  this
                   .propertiesOfDeep(subjectNode)
                   .map(this.findOne),
    }
  }

}

window.Type = Type;
const typeStore = window.types = new TypeStore();
export default observable(typeStore);
