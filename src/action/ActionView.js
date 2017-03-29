// @flow

import React from 'react'
import {compose, withHandlers, withProps} from 'recompose'

import {actions as routerActions} from 'redux-router5'
import {Breadcrumb} from 'semantic-ui-react'
import {Link, Section, Header, withLoader} from '../component'
import {lit, sym} from '../lib/rdf-utilities'
import withRoute from '../router/withRoute.js'
import PropertiesList from '../schema/PropertiesList'
import schemas from '../schema/schemaGraph'


const Breadcrumbs = props =>
  <Breadcrumb>
    {props.items.map(superType =>
      <span key={superType.id}>
          <Breadcrumb.Section>
            <Link key={superType.id} name={'action/view'} params={{id: superType.id}}>
              {lit(superType.label)}
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
      </span>
    )}
  </Breadcrumb>

const ActionView = ({subject, ...props}) =>
  <div>
    <Breadcrumbs items={subject.superTypes}/>
    <Section>
      <Header>{subject.label}</Header>
      {subject.description &&
      <div dangerouslySetInnerHTML={{__html: subject.description.toString()}}/>
      }
    </Section>
    <Section>
      <Header>Properties</Header>
      <PropertiesList listItems={subject.properties} dispatch={props.dispatch}/>
    </Section>
  </div>

const enhance = compose(
  withRoute,
  withProps(({route}) => {
    let id = route.params.id;
    let target = sym(id);
    let subject = schemas.findOne(id);
    return {
      pageHeader: {
        title: lit(subject.label)
      },
      subject:    {
        id:          subject.id,
        type:        subject.type,
        label:       lit(subject.label),
        description: lit(subject.description),
        superTypes:  schemas.superTypesOf(target).map(schemas.findOne),
        properties:  schemas.propertiesOfDeep(target).map(schemas.findOne)
      }
    }
  }),
  withHandlers({
    onBack: ({dispatch}) => (event) => dispatch(routerActions.navigateTo('action'))
  }),
  withLoader(({subject}) => !subject)
)


export default enhance(ActionView)