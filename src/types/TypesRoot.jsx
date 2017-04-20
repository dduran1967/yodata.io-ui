// @flow

import React from 'react';
import Page from '../component/Page';
import Header from '../component/Header';
import MediaList from '../component/MediaList';
import {connect} from 'react-redux';
import {compose, withState, withHandlers} from 'recompose';
import {withLoader} from '../component/Loading';
import {Input} from '../component/index';
import filter from 'lodash/filter';

const enhance = compose(
  connect(({schema, router}) => {
    let isLoading = router.route === null || schema.hasData === false;
    return {
      isLoading,
      schema: isLoading ? false : schema,
    };
  }),
  withLoader(props => props.isLoading),
  withState('typeFilter', 'setTypeFilter', ''),
  withHandlers({
    handleFilterChange: ({typeFilter, setTypeFilter}) =>
      event => {
        setTypeFilter(event.target.value);
      },
  }),
);

const TypesRoot = enhance(({
  schema,
  dispatch,
  navigateTo,
  handleFilterChange,
  typeFilter,
}) => {
  let filteredItems = filter(schema.items, entity => {
    let re = new RegExp(typeFilter, 'gi');
    return re.test(entity.id);
  }).slice(0, 12);
  return (
    <Page>
      <Header
        icon="code"
        content="Type Library"
        subheader="standard actions and models from schema.org, linked-data, RESO and others..."
      >
        <div>
          <Input
            icon="search"
            value={typeFilter}
            onChange={handleFilterChange}
          />
        </div>
      </Header>
      <MediaList
        items={filteredItems}
        handleClick={(event, value) => {
          event.preventDefault();
          navigateTo('types/view', {id: value.id});
        }}
        itemsPerRow={3}
      />
    </Page>
  );
});

export default TypesRoot;
