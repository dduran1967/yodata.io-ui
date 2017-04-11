// @flow

import React from 'react';
import Page from '../component/Page';
import Header from '../component/Header';
import {Card} from 'semantic-ui-react';
import MediaList from '../component/MediaList';
import {connect} from 'react-redux';
import {compose, withState, withHandlers, lifecycle} from 'recompose';
import {withLoader} from '../component/Loading';
import {Input} from '../component/index';
import filter from 'lodash/filter';
import subscribeTo from '../db/subscribeTo';
import values from 'lodash/values';

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
  }).slice(0, 24);
  return (
    <Page>
      <Header icon="code" content="Type Library">
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
        onClick={item => dispatch(navigateTo('types/view', {id: item.id}))}
        children={Card}
        itemsPerRow={3}
      />
    </Page>
  );
});

export default TypesRoot;
