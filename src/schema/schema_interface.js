import {invert, get as getValue, set as setValue} from 'lodash'
import CONTEXT, {sameAs as SAMEAS} from './context'
import NAMESPACE from './context';
import {sym, mergeValues, lit} from '../lib/rdf-utilities'

export const context = {...CONTEXT}
export const namespace = {...NAMESPACE}
export const sameAs = {...SAMEAS}
export const inverseContext = invert(context)

//export const equateAll = ({graph, pairs = []}) => {
//  pairs.forEach(([a, b,]) => graph.equate(a, b))
//}

export const fill = (graph, node) => {
  return graph.subjectIndex[node];
}

//export const match = (source, {subject, predicate, object, graph}) => {
//  let result = source.statements;
//  if (subject) {
//    result = result.filter(statement => statement.subject.equals(subject))
//  }
//
//  if (predicate) {
//    result = result.filter(statement => statement.predicate.equals(predicate))
//  }
//
//  if (object) {
//    result = result.filter(statement => statement.object.equals(object))
//  }
//
//  if (graph) {
//    result = result.filter(statement => statement.graph.equals(graph))
//  }
//  return result;
//}

export const findOne = (node, index, graph) => {
  return graph.match(node)
              .map(toContext)
              .reduce((doc, {predicate, object}) => {
                if (!doc[predicate]) {
                  doc[predicate] = [];
                }
                doc[predicate].push(object);
                return doc;
              }, {
                id: (node && node.value) || null
              })
}

export const toContext = (statement, ctx) => {

  return {
    subject:   ctx[statement.subject] || statement.subject,
    predicate: ctx[statement.predicate] || statement.predicate,
    object:    ctx[statement.object] || statement.object,
  }
}

export const types = graph => {
  let {type, Type} = context;
  return graph.each(null, type, Type).sort().map(findOne);
}

export const subTypesOf = (graph, type) => {
  let subTypes = graph.findSubClassesNT(type);
  return Object.keys(subTypes).map(id => graph.fromNT(id));
}

export const superTypesOf = (graph, subject) => {
  if (subject) {
    let superTypes = graph.findSuperClassesNT(subject);

    return Object.keys(superTypes).map(id => graph.fromNT(id)).reverse();
  }
  return [];
}

export const jsonReduce = (doc, {subject, predicate, object}) => {
  let currentValue = getValue(doc, [subject, predicate,]);
  return setValue(doc, [
    subject,
    predicate,
  ], mergeValues(currentValue, object));
}

export const actions = (graph) => {
  let action = context.Action;
  return subTypesOf(graph, action).sort().map(findOne)
}

export const toJson = (statements = [], options) => {
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

export const propertiesOfDeep = subject => {
  if (subject) {
    return superTypesOf(subject).reduce((a, b) => a.concat(propertiesOf(b)), []).sort()
  }
  return [];
}

export const propertiesOf = (graph, subject) => {
  if (subject) {
    let propertyOf = namespace.rdfs('domain');

    return graph.each(null, propertyOf, subject).sort()
  }
}

export const getSubject = uri => {
  if (!uri) return;
  let subjectNode = sym(uri);
  let props = findOne(subjectNode);
  return {
    id:          uri,
    type:        props.type,
    label:       lit(props.label),
    description: lit(props.description),
    superTypes:  superTypesOf(subjectNode).map(findOne),
    properties:  propertiesOfDeep(subjectNode).map(findOne),
  }
}

const si = {
  findOne,
  types,
  actions
}

window.si = si;

export default si
