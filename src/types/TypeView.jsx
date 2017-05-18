// @flow

import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState
} from 'recompose';
import { Label, Menu, MenuItem } from 'semantic-ui-react';
import Page from '../component/Page';
import PropertiesList from '../schema/PropertiesList';
import Link from '../component/Link';
import castArray from 'lodash/castArray';
import getSuperTypes from '../schema/getSuperTypes.js';
import TypeCard from '../component/TypeCard';
import { withLoader } from '../component/Loading';
import ExampleValues from '../component/ExampleValue';
import SubClassesOf from '../schema/SubClassesOf';
import subClassesOf from '../schema/getSubClassesOf';
import Debug from '../component/Debug';
import propertiesMap from '../schema/propertiesMap';
import { subscribe } from '../db/dbActions.js';
import TabGroup, { TabGroupItem } from '../component/TabGroup'

const typeViewContainer = compose(
  connect(
    state => {
      let { db, router } = state;
      let route = router.route;
      let subjectId = route.params && route.params.id;
      return {
        isLoading: !db[subjectId] || !state.schema.hasData,
        subject: db[subjectId],
        subscriptionName: subjectId,
        subscriptionUrl: `/public/schema/${subjectId}`
      };
    },
    {
      subscribe
    }
  ),
  lifecycle({
    componentDidMount() {
      let { subscriptionName, subscriptionUrl, subscribe } = this.props;
      subscribe(subscriptionName, subscriptionUrl);
    },
    componentWillReceiveProps(next) {
      let { subscriptionName, subscriptionUrl, subscribe } = next;
      subscribe(subscriptionName, subscriptionUrl);
    }
  }),
  withLoader(props => props.isLoading),
  withProps(({ subject }) => {
    const extra = [];
    const superTypes = getSuperTypes(subject);

    if (subject.domainIncludes) {
      let domains = castArray(subject.domainIncludes).map(domain => (
        <Link key={domain} name="types/view" params={{ id: domain }}>
          {domain}{' '}
        </Link>
      ));
      extra.push(
        <Label key="domain" basic content="domain:" detail={domains} />
      );
    }
    if (subject.rangeIncludes) {
      let ranges = castArray(subject.rangeIncludes).map(range => (
        <Link key={range} name="types/view" params={{ id: range }}>
          {range}{' '}
        </Link>
      ));
      extra.push(<Label key="range" basic content="range:" detail={ranges} />);
    }
    if (superTypes) {
      let types = castArray(superTypes).map(type => (
        <Link key={type} name="types/view" params={{ id: type }}>{type} </Link>
      ));
      extra.push(
        <Label key="implements" basic content="implements:" detail={types} />
      );
    }

    return {
      header: subject.label,
      meta: subject.type,
      description: subject.description,
      extra,
      superTypes,
      subTypes: subClassesOf(subject.id),
      properties: propertiesMap(subject.id)
    };
  }),
  withHandlers({
    onBack: ({ navigateTo }) => event => navigateTo('types'),
  })
);

const TypeView = props => {
  let { properties, dispatch, extra, subject } = props;
  return (
    <Page style={{ paddingBottom: '10em' }}>
      <TypeCard subject={subject} extra={extra} />
      <TabGroup
        items={[
          'Properties',
          'Related',
          'Examples',
          'Debug'
        ]}
      >
        <TabGroupItem name="Properties">
          <PropertiesList items={properties} dispatch={dispatch} />
        </TabGroupItem>
        <TabGroupItem name="Related">
          <SubClassesOf subject={subject} />
        </TabGroupItem>
        <TabGroupItem name="Examples">
          <ExampleValues subject={subject} />
        </TabGroupItem>
        <TabGroupItem name="Debug">
          <Debug {...{ subject }} />
        </TabGroupItem>
      </TabGroup>
    </Page>
  );
};

export default typeViewContainer(TypeView);
