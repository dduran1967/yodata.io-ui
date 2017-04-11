declare type Node = {
  termType: 'NamedNode' | 'BlankNode' | 'Literal' | 'Collection',
  value: string,
  substitute(bindings: any): Node,
  compareTerm(Node): -1 | 0 | 1,
  equals(Node): boolean,
  hashString(void): Node,
  sameTerm(Node): boolean,
  toCanonical(): string,
  toNT(): string,
};

declare type NamedNode = {
  termType: 'NamedNode',
  value: string,
};

declare type BlankNode = {
  termType: 'BlankNode',
  value: string,
};

declare type Literal = {
  termType: 'Literal',
  lang?: string,
  datatype?: NamedNode,
};
