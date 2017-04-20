const chance = require('chance').Chance();

export const createReaction = () => {
  let url = chance.url();
  let label = chance.word();
  return {
    id: url,
    url,
    label
  }
}
