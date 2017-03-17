import {Namespace} from 'rdflib'
import {invert} from 'lodash'

// Namespaces
const acl = Namespace('http://www.w3.org/ns/auth/acl#')
const dc = Namespace('http://purl.org/dc/terms/')
const dce = Namespace('http://purl.org/dc/elements/1.1/')
const foaf = Namespace('http://xmlns.com/foaf/0.1/')
const ldp = Namespace('http://www.w3.org/ns/ldp#')
const rdf = Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#')
const rdfs = Namespace('http://www.w3.org/2000/01/rdf-schema#')
const schema = Namespace('http://schema.org/')
const owl = Namespace('http://www.w3.org/2002/07/owl#')
const posix = Namespace('http://www.w3.org/ns/posix/stat#')
const skos = Namespace('http://www.w3.org/2004/02/skos/core#')
const vann = Namespace('http://purl.org/vocab/vann/')
const vs = Namespace('http://www.w3.org/2003/06/sw-vocab-status/ns#')
const xsd = Namespace('http://www.w3.org/2001/XMLSchema#')
const link = Namespace('http://www.w3.org/2007/ont/link#')


export const NAMESPACE = {
  acl,
  dc,
  dce,
  foaf,
  ldp,
  rdf,
  rdfs,
  schema,
  owl,
  skos,
  vann,
  vs,
  xsd,
  link,
  posix
}

const baseTypes = {
  Person:           schema('Person'),
  Thing:            schema('Thing'),
  Place:            schema('Place'),
  Organization:     schema('Organization'),
  Action:           schema('Action'),
  Event:            schema('Event'),
  Text:             schema('Text'),
  DateTime:         schema('DateTime'),
  EntryPoint:       schema('EntryPoint'),
  ImageObject:      schema('ImageObject'),
  ActionStatusType: schema('ActionStatusType'),
  PostalAddress:    schema('PostalAddress'),
  CreativeWork:     schema('CreativeWork'),
  URL:              schema('URL'),
  Property:         rdf('Property'),
  Type:             rdfs('Class'),
  Vocab:            owl('Ontology'),
  Document:         link('Document'),
  RDFDocument:      link('RDFDocument'),
}

export const context = {
  allValuesFrom:            owl('allValuesFrom'),
  bytes:                    posix('size'),
  contributor:              dc('contributor'),
  creator:                  dc('creator'),
  contains:                 ldp('contains'),
  deprecated:               owl('deprecated'),
  description:              rdfs('comment'),
  disjointWith:             owl('disjointWith'),
  dateModified:             schema('dateModified'),
  domain:                   schema('domainIncludes'),
  equivalentClass:          owl('equivalentClass'),
  equivalentProperty:       owl('equivalentProperty'),
  hasVersion:               dc('hasVersion'),
  intersectionOf:           owl('intersectionOf'),
  inverseOf:                schema('inverseOf'),
  isDefinedBy:              rdfs('isDefinedBy'),
  label:                    rdfs('label'),
  maxCardinality:           owl('maxCardinality'),
  maxQualifiedCardinality:  owl('maxQualifiedCardinality'),
  mainEntityOfPage:         schema('mainEntityOfPage'),
  minCardinality:           owl('minCardinality'),
  minQualifiedCardinality:  owl('minQualifiedCardinality'),
  modificationTimestamp:    posix('mtime'),
  note:                     skos('note'),
  onClass:                  owl('onClass'),
  onDataRange:              owl('onDataRange'),
  onProperty:               owl('onProperty'),
  preferredNamespacePrefix: vann('preferredNamespacePrefix'),
  preferredNamespaceUri:    vann('preferredNamespaceUri'),
  publisher:                dc('publisher'),
  range:                    schema('rangeIncludes'),
  sameAs:                   owl('sameAs'),
  seeAlso:                  rdfs('seeAlso'),
  someValuesFrom:           owl('someValuesFrom'),
  source:                   dc('source'),
  subClassOf:               rdfs('subClassOf'),
  subPropertyOf:            rdfs('subPropertyOf'),
  supersededBy:             schema('supersededBy'),
  title:                    dc('title'),
  tags:                     schema('keywords'),
  termStatus:               vs('term_status'),
  type:                     rdf('type'),
  unionOf:                  owl('unionOf'),
  versionInfo:              owl('versionInfo'),
  ...baseTypes
};

export const sameAs = [
  [rdfs('domain'), schema('domainIncludes')],
  [rdfs('range'), schema('rangeIncludes')],
  [dc('modified'), schema('dateModified')]
]

export const PROPERTY_TYPES = [
  'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
  'http://www.w3.org/2000/01/rdf-schema#Property',
  'http://www.w3.org/2002/07/owl#AnnotationProperty',
  'http://www.w3.org/2002/07/owl#DeprecatedProperty',
  'http://www.w3.org/2002/07/owl#FunctionalProperty',
  'http://www.w3.org/2002/07/owl#ObjectProperty',
  'http://www.w3.org/2002/07/owl#OntologyProperty'
];

export const CLASS_TYPES = [
  'http://www.w3.org/2000/01/rdf-schema#Class',
  'http://www.w3.org/2002/07/owl#Class',
  'http://www.w3.org/2000/01/rdf-schema#Datatype',
  'http://www.w3.org/2002/07/owl#DeprecatedClass',
  'http://purl.org/dc/terms/AgentClass'];

export const CONTEXT_IN = invert(context);

export default context;
