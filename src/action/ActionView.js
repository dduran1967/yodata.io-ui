// @flow

import isNull from 'lodash/isNull'
import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, withProps } from 'recompose'
import { Label } from 'semantic-ui-react'
import Page from '../component/Page'
import PropertiesList from '../schema/PropertiesList'
import Link from '../component/Link'
import castArray from 'lodash/castArray'
import Header from '../component/Header'
import isArray from 'lodash/isArray'
import getSuperTypes from '../schema/getSuperTypes.js'
import TypeCard from '../component/TypeCard'
import { withLoader } from '../component/Loading'
import Section from '../component/Section'
import ExampleValues from '../component/ExampleValue'


const propertiesOf = propSource => id =>
  propSource.filter(({ domainIncludes }) => {
    if (isArray(domainIncludes)) {
      return domainIncludes.includes(id);
    }
    if (typeof domainIncludes === 'string') {
      return domainIncludes === id;
    }
    return false;
  });

const actionViewContainer = compose(
  connect(({ schema, router }) => {
    let isLoading = isNull(router.route) || schema.hasData === false;
    let subject, properties, superTypes;
    if (!isLoading) {
      subject = schema.index[ router.route.params.id ];
      if (subject.type === 'Type') {
        superTypes = getSuperTypes(subject);
        let findProperties = propertiesOf(schema.properties);
        properties = superTypes.reduce((state, superType) => {
          return { ...state, [superType]: findProperties(superType) };
        }, {});
      }
    }
    return {
      isLoading,
      subject,
      superTypes,
      properties,
    };
  }),
  withLoader(props => props.isLoading),
  withProps(({ subject, superTypes }) => {
    let extra = [];
    if (subject.domainIncludes) {
      let domains = castArray(subject.domainIncludes).map(domain => (
        <Link key={domain} name="types/view" params={{ id: domain }}>
          {domain}{' '}
        </Link>
      ));
      extra.push(
        <Label key="domain" basic content="domain:" detail={domains}/>,
      );
    }
    if (subject.rangeIncludes) {
      let ranges = castArray(subject.rangeIncludes).map(range => (
        <Link key={range} name="types/view" params={{ id: range }}>
          {range}{' '}
        </Link>
      ));
      extra.push(<Label key="range" basic content="range:" detail={ranges}/>);
    }
    if (superTypes) {
      let types = castArray(superTypes).map(type => (
        <Link key={type} name="types/view" params={{ id: type }}>{type} </Link>
      ));
      extra.push(
        <Label key="implements" basic content="implements:" detail={types}/>,
      );
    }
    return {
      header: subject.label,
      meta: subject.type,
      description: subject.description,
      extra,
    };
  }),
  withHandlers({
    onBack: ({ navigateTo }) => event => navigateTo('types'),
  }),
);

const ActionView = props => {
  let {
    properties,
    dispatch,
    extra,
    subject,
  } = props;
  return (
    <Page>
      <Section>
        <TypeCard subject={subject} extra={extra}/>
      </Section>

      <ExampleValues subject={subject}/>

      {properties &&
      <Section>
        <Header content="Properties"/>
        <PropertiesList items={properties} dispatch={dispatch}/>
      </Section>}
    </Page>
  );
};

export default actionViewContainer(ActionView)
