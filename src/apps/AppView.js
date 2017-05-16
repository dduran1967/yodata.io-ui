// @flow

import React from 'react';
import Debug from '../component/Debug.js';
import { compose, withProps } from 'recompose';
import { Header, Section } from '../component/index';
import { Image } from 'semantic-ui-react';
import { ActionCards } from '../component/ActionCard.js';
import { connect } from 'react-redux'
import keyBy from 'lodash/keyBy';

const actionsProduced = [
  'AddAction',
  'AcceptAction',
  'AssignAction',
  'RegisterAction',
  'RejectAction',
  'ReturnAction',
  'UpdateAction',
  'UnRegisterAction',
]

const AppView = compose(
  withProps(props => ({
    subject: {
      id: 'RED',
      name: 'Real Estate Digial',
      image: '/red-logo.jpg',
    }
  })),
  connect(
    state => {
      let actionItems = state.schema && state.schema.actions;
      let actions = actionItems ? keyBy(actionItems,'id') : {};
      let producesAction, consumesAction;
      if (actionItems && actionItems.length > 0) {
        producesAction = actionsProduced.map(action => {
          return actions[action]
        })
      }
      return {
        actions,
        producesAction
      }
    }
  ),
)(props => (
  <div>
    <Section>
      <Image src={props.subject.image} />
    </Section>
    <Section>
      <Header content="Produces Actions" />
      <ActionCards
        items={props.producesAction}
      />
    </Section>
    <Section>
      <Header content="Consumes Actions" />
    </Section>
  </div>
));

export default AppView;
