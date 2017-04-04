// @flow

import React from 'react'
import {Search} from 'semantic-ui-react'

type SearchState = {
  +value: string,
  +result: Array<any>
}

type SearchResult = {
  title: string,
  dscription?: string,
  id: number
}

type SearchUIInterface = {
  search: SearchState,
  handleResultSelect: () => mixed,
  handleSearchChange: () => mixed
}

const SearchPill = ({search, handleResultSelect, handleSearchChange, ...rest}) => (
  <Search
    onResultSelect={handleResultSelect}
    onSearchChange={handleSearchChange}
    results={search.result}
    value={search.value}
    {...rest}
  />
)

export default SearchPill