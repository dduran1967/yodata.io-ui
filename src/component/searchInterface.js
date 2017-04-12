// @flow

import React from 'react';
import {connect} from 'react-redux';
import {createAction} from 'redux-actions';
import Debug from './Debug';
import {Search} from 'semantic-ui-react';

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

// SEARCH ACTIONS
const initializeSearch = createAction('SEARCH_INIT');
const searchValue = createAction('SEARCH_VALUE');
const searchResult = createAction('SEARCH_RESULT');

// SEARCH REDUCER
export function searchReducer(state: SearchState, action: SearchAction) {
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

export default connect(
  state => ({value: state.search.value, results: state.search.results}),
  {
    onSearchChange: (e, v) => searchValue(v),
    onFocus: e => initializeSearch(),
  },
)(Search);
