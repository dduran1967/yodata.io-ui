// @flow
import React from 'react'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import UserButton from '../user/UserButton'
import { Input } from 'semantic-ui-react'
import {searchController} from '../services/search_service.js'
import {HotKeys} from 'react-hotkeys';


const Search = props => (
  <div>
    <form onSubmit={() => {
      return false
    }}>
      <HotKeys handlers={{
        'controlF': event => console.log(event, props)
      }}>
      <Input
        id="app_search"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        icon="search"
      />
      </HotKeys>
    </form>
  </div>
)

const SearchInput =  searchController(({search, resetSearch, setSearchQuery}) => (
  <Search
    onChange={event => setSearchQuery(event.target.value)}
    onFocus={resetSearch}
    value={search.query}
  />
));


const Appbar = props =>
  <div className="ui menu">
    <Menu.Item icon="bars" onClick={props.toggleNav}/>
    <Menu.Item header={true}>Yodata</Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item><SearchInput/></Menu.Item>
      <Menu.Item><UserButton/></Menu.Item>
    </Menu.Menu>
  </div>


export default compose(
  connect(state => ({})),
  withHandlers({
    toggleNav: ({ dispatch }) => () => {
      dispatch({ type: '@@Appbar/TOGGLE_NAV' });
    },
  }),
)(Appbar)

