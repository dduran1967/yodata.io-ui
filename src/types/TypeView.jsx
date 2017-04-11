// @flow

import React from 'react';
import {compose, withHandlers, withProps, lifecycle} from 'recompose';
import {actions as routerActions} from 'redux-router5';
import {Breadcrumb, Header} from 'semantic-ui-react';
import {Link, Section, withLoader} from '../component';
import {lit, sym} from '../lib/rdf-utilities';
import withRoute from '../router/withRoute.js';
import PropertiesList from '../schema/PropertiesList';
import schemas from '../schema/schemaGraph';
import {connect} from 'react-redux';
import Debug from '../component/Debug';

const Breadcrumbs = props => (
  <Breadcrumb>
    {props.items.map(superType => (
      <span key={superType.id}>
        <Breadcrumb.Section>
          <Link
            key={superType.id}
            name={'action/view'}
            params={{id: superType.id}}
          >
            {lit(superType.label)}
          </Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
      </span>
    ))}
  </Breadcrumb>
);

const withController = compose(
  connect(({schema, router}) => {
    let isLoading = router.route === null || schema.hasData === false;
    let data, properties = false;
    if (!isLoading) {
      data = schema.index[router.route.params.id];
      properties = schema.properties.filter(({domainIncludes}) => {
        if (Array.isArray(domainIncludes)) {
          return domainIncludes.includes(data.id);
        }
        if (typeof domainIncludes === 'string') {
          return domainIncludes === data.id;
        }
        return false;
      });
    }
    return {
      isLoading,
      data,
      properties,
    };
  }),
  withLoader(props => props.isLoading),
  withProps(({data}) => {
    return {
      header: {
        as: 'h1',
        content: data.label,
        subheader: data.description,
      },
      subject: {
        id: data.id,
        type: data.type,
        label: data.label,
        description: data.description,
        superTypes: [],
        properties: [],
      },
    };
  }),
  withHandlers({
    onBack: ({dispatch}) =>
      event => dispatch(routerActions.navigateTo('action')),
  }),
);

const TypeView = (props: {subject: Type, dispatch: () => void}) => {
  let {label, description} = props.subject;
  return (
    <div>
      {/*<Breadcrumbs items={subject.superTypes} />*/}
      <Section>
        <Header {...props.header} />
      </Section>
      <Section>
        <Header content="Properties" />
        <PropertiesList
          listItems={props.properties}
          dispatch={props.dispatch}
        />
      </Section>
    </div>
  );
};

export default withController(TypeView);
