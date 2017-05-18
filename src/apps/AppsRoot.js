import React from 'react'
import Header from '../component/Header'
import Page from '../component/Page'

import { compose, getContext, withProps } from 'recompose'
import { Card, Image } from 'semantic-ui-react'


const AppsRoot = compose(
  getContext({
    router: React.PropTypes.object
  }),
  withProps(props => ({
    items: [
      {
        id: 'RED',
        name: 'Real Estate Digial',
        description: "a company"
      }
    ]
  })),
)(props => (
  <Page>
    <Header
      content="Applications"
    />
    <Card
      header="Real Estate Digital"
      image={<Image src="/red-logo.jpg" fluid/>}
      onClick={(event, value) => {
        event.preventDefault();
        props.router.navigate('app/view', { id: 'red' });
      }}
    />
  </Page>
))

export default AppsRoot
