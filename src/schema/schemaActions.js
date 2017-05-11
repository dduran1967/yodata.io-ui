import {createAction} from 'redux-actions'
import actionService from '../services/action_service.js';

export const fetchSchema = createAction('SCHEMA/FETCH_SCHEMA')
export default fetchSchema
actionService.register('fetchSchema', fetchSchema)