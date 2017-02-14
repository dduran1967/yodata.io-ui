import $rdf from 'rdflib';

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

export default {
  docname,
  lit,
  sym
}

window.$rdf = $rdf;

window.lit = lit;
