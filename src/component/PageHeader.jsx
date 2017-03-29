// @flow
import React from 'react'
import {Container} from 'semantic-ui-react'
import {Button, Icon} from '../component'
import UserButton from '../user/UserButton.js'
import {toggleDrawer, withDrawer} from './Drawer'

const PageHeader = ({title, dispatch}) =>
  <header className="ui fixed menu">
    <Button icon="bars" onClick={() => dispatch(toggleDrawer())} className="item"/>
    <Container>
      <div className="left">
        <div className="text item">
          <Icon name="hashtag"></Icon>
          {title}
        </div>
      </div>
      <div className="right menu">
        <UserButton className="item"/>
      </div>
    </Container>
  </header>

PageHeader.propTypes = {
  title: React.PropTypes.string
}

export default withDrawer(PageHeader)