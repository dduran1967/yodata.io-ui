// @flow

import React from 'react';
import {compose, withHandlers} from 'recompose';
import {actions as routerActions} from 'redux-router5';
import {Breadcrumb, Header} from 'semantic-ui-react';
import {Link, Section, withLoader} from '../component';
import {lit} from '../lib/rdf-utilities';
import PropertiesList from '../schema/PropertiesList';
import {connect} from 'react-redux';
import {Debug} from '../component/index';
import {flatten} from 'lodash';
import {listItems} from '../component/Data';

const Breadcrumbs = props => (
  <Breadcrumb>
    {props.items.map(superType => (
      <span key={superType}>
        <Breadcrumb.Section>
          <Link key={superType} name={'types/view'} params={{id: superType}}>
            {lit(superType)}
          </Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
      </span>
    ))}
  </Breadcrumb>
);

const propertiesOf = propSource =>
  id =>
    propSource.filter(({domainIncludes}) => {
      if (Array.isArray(domainIncludes)) {
        return domainIncludes.includes(id);
      }
      if (typeof domainIncludes === 'string') {
        return domainIncludes === id;
      }
      return false;
    });

function getProperties(
  propSource: Array<any>,
  domainKey: string = 'domainIncludes',
  subjectId: string,
): Array<any> {
  return propSource.filter(currentProp => {
    let domains = currentProp[domainKey];
    if (Array.isArray(domains)) {
      return domains.includes(subjectId);
    }
    if (typeof domains === 'string') {
      return domains === subjectId;
    }
    return false;
  });
}

function getSuperTypes(typeIndex, subject) {
  let superTypes = [subject.id];
  let nextParent = subject.subClassOf;
  while (nextParent && nextParent !== subject.id) {
    superTypes.push(nextParent);
    nextParent = typeIndex[nextParent] && typeIndex[nextParent].subClassOf;
  }
  return superTypes;
}

const withController = compose(
  connect(
    ({schema, router}) => {
      let isLoading = router.route === null || schema.hasData === false;
      let subject, properties, superTypes;
      if (!isLoading) {
        subject = schema.index[router.route.params.id];
        superTypes = getSuperTypes(schema.index, subject);
        let findProperties = propertiesOf(schema.properties);
        properties = superTypes.reduce(
          (state, superType) => {
            return {...state, [superType]: findProperties(superType)};
          },
          {},
        );
      }
      return {
        isLoading,
        subject,
        superTypes,
        properties,
      };
    },
    {
      navigateTo: routerActions.navigateTo,
    },
  ),
  withLoader(props => props.isLoading),
  withHandlers({
    onBack: ({navigateTo}) => event => navigateTo('types'),
  }),
);

const TypeView = props => {
  let {subject, superTypes, properties, dispatch} = props;
  return (
    <div>
      <Breadcrumbs items={superTypes.reverse()} />
      <Section>
        <Header
          as="h1"
          content={subject.label}
          subheader={subject.description}
        />
      </Section>
      <Section>
        <Header content="Properties" />
        <PropertiesList items={properties} dispatch={dispatch} />
      </Section>
    </div>
  );
};

export default withController(TypeView);
