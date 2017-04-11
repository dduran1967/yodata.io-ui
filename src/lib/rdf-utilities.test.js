import {termToContext} from './rdf-utilities';
import $rdf from 'rdflib';

it('transforms vocab terms to local names', () => {
  let term = $rdf.sym('http://schema.org/Person');
  let vocab = 'http://schema.org/';
  let transform = termToContext({}, vocab, true);
  expect(transform(term)).toBe('Person');
});
