// @flow

import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers} from 'recompose'
import {createAction} from 'redux-actions'
import Debug from './Debug';

// SEARCH TYPES
type SearchState = {
  +value: string,
  +result: Array<any>
}

type SearchInitAction = {
  +type: 'SEARCH_INIT',
  +payload: string, // search name
  meta: {
    source: any
  }
}

type SearchValueAction = {
  +type: 'SEARCH_VALUE',
  +payload: string
}

type SearchResultAction = {
  +type: 'SEARCH_RESULT',
  +payload: Array<any>
}

type SearchResultSelectedAction = {
  +type: 'SEARCH_RESULT_SELECTED',
  +payload: any
}

type SearchAction =
  SearchValueAction |
  SearchResultAction |
  SearchInitAction

type SearchResult = {
  title: string,
  dscription?: string,
  id: number,
  image: string,
}

type SearchUIInterface = {
  search: SearchState,
  handleResultSelect: () => mixed,
  handleSearchChange: () => mixed
}

type SearchInterfaceSettings = {
  +name: string
}

// SEARCH ACTIONS
const initializeSearch = createAction('SEARCH_INIT')
const searchValue = createAction('SEARCH_VALUE')
const searchResult = createAction('SEARCH_RESULT')

// SEARCH REDUCER
export function searchReducer(state: SearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case 'SEARCH_INIT':
      return {...state, search: {value: '', result: []}}
    case 'SEARCH_VALUE':
      return {...state, value: action.payload}
    case 'SEARCH_RESULT':
      let result: Array<SearchResult> = action.payload

      return {...state, result}
    default:
      return state;
  }
}

// SEARCH UI
export const SearchDebug = (props: SearchUIInterface) => {
  let {search, handleSearchChange} = props
  let {value, result} = search
  return (
    <div>
      <input type="text" value={value} onChange={handleSearchChange}/>
      <Debug {...{value, result}} />
    </div>
  )
}

const configureSearchInterface = (settings: SearchInterfaceSettings) => compose(
  connect(state => ({search: state.search})),
  withHandlers({
    resetComponent:     ({dispatch}) => () =>
      dispatch({type: 'SEARCH_INIT'}),
    handleResultSelect: ({dispatch}) => (e, result) => {
      dispatch({type: 'SEARCH_RESULT_SELECTED', payload: result})
    },
    handleSearchChange: ({dispatch}) => ({target}) =>
      dispatch({type: 'SEARCH_VALUE', payload: target.value})
  })
)

export default configureSearchInterface