import {createAction} from 'redux-actions'

export const fetchSchema = createAction('SCHEMA/FETCH_SCHEMA')
export const chooseAction = createAction('SCHEMA/CHOOSE_ACTION')

export default {
  fetchSchema
}