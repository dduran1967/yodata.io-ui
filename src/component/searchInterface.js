// @flow

import React from 'react';
import {connect} from 'react-redux';
import {compose, withHandlers, lifecycle} from 'recompose';
import {createAction} from 'redux-actions';
import Debug from './Debug';

// SEARCH TYPES
type SearchState = {
  +value: string,
  +result: Array<any>,
};

type SearchInitAction = {
  +type: 'SEARCH_INIT',
  +payload: string, // search name
  meta: {
    source: any,
  },
};

type SearchValueAction = {
  +type: 'SEARCH_VALUE',
  +payload: string,
};

type SearchResultAction = {
  +type: 'SEARCH_RESULT',
  +payload: Array<any>,
};

type SearchAction = SearchValueAction | SearchResultAction | SearchInitAction;

type SearchResult = {
  title: string,
  dscription?: string,
  id: number,
  image: string,
};

type SearchUIInterface = {
  value: string,
  results: Array<SearchResult>,
  onResultSelect: () => mixed,
  onSearchChange: () => mixed,
};

type SearchInterfaceSettings = {
  +name: string,
};

// SEARCH ACTIONS
const initializeSearch = createAction('SEARCH_INIT');
const searchValue = createAction('SEARCH_VALUE');
const searchResult = createAction('SEARCH_RESULT');

// SEARCH REDUCER
export function searchReducer(
  state: SearchState,
  action: SearchAction,
): SearchState {
  switch (action.type) {
    case 'SEARCH_INIT':
      return {value: '', results: []};
    case 'SEARCH_VALUE':
      return {...state, value: action.payload};
    case 'SEARCH_RESULT':
      return {...state, results: action.payload};
    default:
      return state;
  }
}

// SEARCH UI
export const SearchDebug = props => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onSearchChange} />
      <Debug {...props} />
    </div>
  );
};

function configureSearchInterface(name: string) {
  return compose(
    connect(({search}) => ({results: search.results})),
    lifecycle({
      componentDidMount() {
        this.props.dispatch({
          type: 'SEARCH_INIT',
          payload: {name},
        });
      },
    }),
    withHandlers({
      resetComponent: ({dispatch}) => () => dispatch({type: 'SEARCH_INIT'}),
      onResultSelect: ({dispatch}) =>
        (e, result) => {
          dispatch({type: 'SEARCH_RESULT_SELECTED', payload: result});
        },
      onSearchChange: ({dispatch}) =>
        ({target}) => dispatch({type: 'SEARCH_VALUE', payload: target.value}),
    }),
  );
}

export default configureSearchInterface;
