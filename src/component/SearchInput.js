// @flow

import React from 'react'
import {searchController} from '../services/search_service.js'
import {Button, Input} from 'semantic-ui-react'
import {Motion, spring} from 'react-motion'
import SearchIcon from 'react-icons/lib/fa/search'

class SearchInput extends React.Component {
  state = {
    isOpen: false,
  };

  static defaultProps = {
    placeholder: '',
    input: {},
    button: {
      style: {},
    },
  };

  toggleOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const maskStyle = {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    };
    let {button, placeholder} = this.props;
    button = {
      ...button,
      style: {...button.style, margin: 0, zIndex: 1010},
    };
    // const finalRotation = -135;
    return (
      <Motion style={this.state.isOpen ? {t: spring(1)} : {t: spring(0)}}>
        {({t}) => (
          <div style={maskStyle}>
            <form onSubmit={() => {return false}}>
              <Input
                placeholder={placeholder}
                value={this.props.value}
                style={{transform: `translateX(${(1 - t) * 200}px)`}}
                onChange={this.props.onChange}
                onFocus={this.props.onFocus}
              />
            </form>
            <Button
              {...button}
              icon={<SearchIcon />}
              onClick={() => this.toggleOpen()}
            />
          </div>
        )}
      </Motion>
    );
  }
}

export default searchController(({search, resetSearch, setSearchQuery}) => (
  <SearchInput
    onChange={event => setSearchQuery(event.target.value)}
    onFocus={resetSearch}
    value={search.query}
  />
));
