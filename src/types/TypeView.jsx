// @flow

import isNull from 'lodash/isNull'
import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, withProps, withState } from 'recompose'
import { Label, Menu, MenuItem } from 'semantic-ui-react'
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
import SubClassesOf from '../schema/SubClassesOf'
import subClassesOf from '../schema/getSubClassesOf'


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

const typeViewContainer = compose(
  withState('tab','setTab',{
    currentTab: 'Properties',
    items: [
      'Properties',
      'Examples',
      'More Specific Types'
    ]
  }),
  connect(({ schema, router }) => {
    let isLoading = isNull(router.route) || schema.hasData === false;
    let subject, properties, superTypes;
    if (!isLoading) {
      subject = schema.index[ router.route.params.id ];
      if (subject.type === 'Type') {
        superTypes = getSuperTypes(schema.index, subject);
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
    selectTab: ({tab, setTab}) => (event, selected) => {
      setTab({...tab, currentTab: selected.name})
    },
    isActive: props => name => {
      return props.tab.currentTab === name;
    }
  }),
);

const TypeView = props => {
  let {
    properties,
    dispatch,
    extra,
    subject,
  } = props;
  let subTypes = subClassesOf(subject && subject.id);
  let currentTab = props.tab.currentTab;
  return (
    <Page style={{paddingBottom: '10em'}}>
      <TypeCard subject={subject} extra={extra}/>

      <Menu tabular>
        <MenuItem
          name="Properties"
          onClick={props.selectTab}
          active={props.isActive('Properties')}
        />
        <MenuItem
          name="Examples"
          onClick={props.selectTab}
          active={props.isActive('Examples')}
        />
        <MenuItem
          name="More Specific Types"
          onClick={props.selectTab}
          active={props.isActive('More Specific Types')}
        />
      </Menu>

      {currentTab === 'Properties' &&
      <PropertiesList items={properties} dispatch={dispatch}/>
      }

      {currentTab === 'Examples' &&
      <ExampleValues subject={subject}/>
      }

      {currentTab === 'More Specific Types' &&
      <SubClassesOf subject={subject.id}/>
      }
    </Page>
  );
};

export default typeViewContainer(TypeView)
