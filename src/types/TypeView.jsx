// @flow

import isNull from "lodash/isNull";
import React from "react";
import { connect } from "react-redux";
import {compose, withHandlers, withProps, withState} from "recompose";
import {Label} from "semantic-ui-react";
import { Section, withLoader } from "../component";
import Page from "../component/Page";
import PropertiesList from "../schema/PropertiesList";
import Debug from "../component/Debug";
import Link from '../component/Link'
import castArray from 'lodash/castArray'
import Editable from '../component/Editable'
import CardEditable from '../component/CardEditable'
import Header from '../component/Header'
import BasicCard from '../component/BasicCard'
import isArray from 'lodash/isArray'
import FieldEditable from '../component/FieldEditable'
import getSuperTypes from '../schema/getSuperTypes.js';

const propertiesOf = propSource => id =>
  propSource.filter(({ domainIncludes }) => {
    if (isArray(domainIncludes)) {
      return domainIncludes.includes(id);
    }
    if (typeof domainIncludes === "string") {
      return domainIncludes === id;
    }
    return false;
  });

const typeViewContainer = compose(
  connect(({ schema, router }) => {
    let isLoading = isNull(router.route) || schema.hasData === false;
    let subject, properties, superTypes;
    if (!isLoading) {
      subject = schema.index[router.route.params.id];
      if (subject.type === "Type") {
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
      properties
    };
  }),
  withLoader(props => props.isLoading),
  withProps(({subject, superTypes}) => {
    let extra = [];
    if (subject.domainIncludes) {
      let domains = castArray(subject.domainIncludes).map(domain => <Link key={domain} name="types/view" params={{id:domain}}>{domain}  </Link>)
      extra.push(<Label key="domain" basic content="domain:" detail={domains} />)
    }
    if (subject.rangeIncludes) {
      let ranges = castArray(subject.rangeIncludes).map(range => <Link key={range} name="types/view" params={{id:range}}>{range}  </Link>)
      extra.push(<Label key="range" basic content="range:" detail={ranges} />)
    }
    if (superTypes) {
      let types = castArray(superTypes).map(type => <Link key={type} name="types/view" params={{id:type}}>{type}  </Link>)
      extra.push(<Label key="implements" basic content="implements:" detail={types} />)
    }
    return {
      header: subject.label,
      meta: subject.type,
      description: subject.description,
      extra
    }
  }),
  withHandlers({
    onBack: ({ navigateTo }) => event => navigateTo("types")
  })
);

const TypeView = props => {
  let { subject, properties, dispatch, header, meta, description, extra } = props;
  return (
    <Page>
      <Section>
        <BasicCard
          header={header}
          meta={meta}
          description={description}
          extra={extra}
        />
      </Section>
      {properties &&
        <Section>
          <Header content="Properties" />
          <PropertiesList items={properties} dispatch={dispatch} />
        </Section>}
    </Page>
  );
};

export default typeViewContainer(TypeView)
