const chance = require('chance').Chance();

export const listOf = creator => {
  let res = [];
  let num = chance.integer({min: 0, max: 10})
  while (res.length < num) {
    res.push(creator())
  }
  return res;
}

export const listItems = (num) => {
  let len = num || chance.integer({min: 0, max: 10})
  let result = [];
  while (result.length < len) {
    result.push({
      key:         chance.url(),
      id:          chance.url(),
      label:       chance.word()
    })
  }
  return result;
}