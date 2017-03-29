import {createAction} from 'redux-actions';

export const error = createAction('ERROR', (message) => ({message}))
