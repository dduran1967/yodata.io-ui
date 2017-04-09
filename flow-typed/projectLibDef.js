declare class Node {
  termType: 'NamedNode' | 'BlankNode' | 'Literal' | 'Collection',
  value: string,
  substitute(bindings: Map): Node,
  compareTerm(Node): -1 | 0 | 1,
  equals(Node): boolean,
  hashString(void): Node,
  sameTerm(Node): boolean,
  toCanonical(): string,
  toNT(): string,
}

declare class NamedNode extends Node {
  termType: 'NamedNode',
}

declare class BlankNode extends Node {
  termType: 'NamedNode',
}

declare class Literal extends Node {
  termType: 'Literal',
  lang?: string,
  datatype?: NamedNode,
}
