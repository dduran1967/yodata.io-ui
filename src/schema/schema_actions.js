import {createAction} from 'redux-actions'
const chance = require('chance').Chance();

export const fetchSchema = createAction('SCHEMA/FETCH_SCHEMA')

export default {
  fetchSchema
}