export default function addToSet(set, value) {
  let result = set.slice();
  result.push(value);
  return result;
}
