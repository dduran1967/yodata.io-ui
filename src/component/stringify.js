
// @flow

import json from 'json5';


interface Resource {
  type?: string,
  id?: string
}

export default function stringify(value:Resource) {
  let {type, id, ...rest} = value;
  return json.stringify({type,id, ...rest},null,2)
}