const chance = require('chance').Chance();
import {listOf} from '../component/Data.js'

export const createReaction = () => {
  let url = chance.url();
  let label = chance.word();
  return {
    id: url,
    url,
    label
  }
}

export const reactionInitialState = {
  items: listOf(createReaction)
}