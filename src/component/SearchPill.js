// @flow

import React from 'react';
import {Search} from 'semantic-ui-react';

type SearchState = {
  +value: string,
  +result: Array<any>,
};

type SearchResult = {
  title: string,
  dscription?: string,
  id: number,
};

type SearchProps = {
  value: string,
  results: Array<SearchResult>,
  onResultSelect: () => void,
  onSearchChange: () => void,
};

export default Search;
