// @flow

import React from 'react';
import {connect} from 'react-redux';
import {compose, withHandlers, lifecycle} from 'recompose';
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

type SearchResult = {
  title: string,
  dscription?: string,
  id: number,
  image: string,
};

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
      onSearchChange: ({dispatch}) =>
        ({target}) => dispatch({type: 'SEARCH_VALUE', payload: target.value}),
    }),
  );
}

class SearchInterface extends React.Component {
  props: {
    name: string,
    value: string,
    results: Array<SearchResult>,
    dispatch: () => void,
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'SEARCH_INIT',
      payload: {name: this.props.name},
    });
  }
  // onSearchChange = event =>
  //   this.props.dispatch({type: 'SEARCH_VALUE', payload: event.target.value});

  render() {
    let {value, results, onSearchChange, onFocus} = this.props;
    return <Search {...{value, results, onSearchChange, onFocus}} />;
  }
}

export default connect(
  state => ({value: state.search.value, results: state.search.results}),
  {
    onSearchChange: (e, v) => searchValue(v),
    onFocus: e => initializeSearch(),
  },
)(Search);
