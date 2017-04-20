
// @flow

interface Resource {
  type?: string,
  id?: string
}

export default function stringify(value:Resource) {
  let {type, id, ...rest} = value;
  return JSON.stringify({type,id, ...rest},null,2)
}