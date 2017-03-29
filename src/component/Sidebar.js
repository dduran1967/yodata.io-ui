import React from 'react'
import {compose} from 'recompose'
import {Icon, Menu, Sidebar} from 'semantic-ui-react'
import {Link, withDrawer} from '../component'
import {withRoute} from '../router'
import {sidebarRoutes} from '../router/routes.js'


export default compose(withRoute, withDrawer)(
  ({drawer, navigateTo, dispatch}) =>
    <Sidebar as={Menu} animation='overlay' width="thin" visible={drawer.open} icon='labeled' vertical inverted>
      {sidebarRoutes.map(({name, icon, label}) =>
        <Link key={name} name={name}>
          <Menu.Item>
            <Icon name={icon}/>
            {label}
          </Menu.Item>
        </Link>
      )}
    </Sidebar>
)