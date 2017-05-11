// @flow

import React from 'react'
import Page from './Page'
import Hero from './Hero'
import {connect} from 'react-redux'
import {actions as routerActions} from 'redux-router5'
import {compose} from 'recompose'

const LandingPage = (props) =>
  <Page>
    <Hero title={props.title} onSubmit={(event, email) => {
      'use strict'
      props.navigateTo('businessProfile')
    }}/>
  </Page>

const landingPageContainer = compose(
  connect(
    state => ({
      user: state.user,
    }),
    {
      navigateTo: routerActions.navigateTo,
    },
  ),
)

export default landingPageContainer(LandingPage)
