// @flow

import React from 'react'
import {Grid, Search} from 'semantic-ui-react'

type SearchState = {
  +value: string,
  +result: Array<any>
}

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

const Typeahead = (props: SearchUIInterface) => (
  <Grid>
    <Grid.Column width={8}>
      <Search
        onResultSelect={props.handleResultSelect}
        onSearchChange={props.handleSearchChange}
        results={(props.search.result: Array<SearchResult>)}
        value={props.search.value}
      />
    </Grid.Column>
  </Grid>
)

export default Typeahead;