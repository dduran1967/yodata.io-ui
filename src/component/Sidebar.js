import React from 'react'
import {Drawer, PageHeader, Icon, NavLink} from '../component'
import {sidebarRoutes} from '../router/routes.js'
import {withDrawer, toggleDrawer} from './Drawer.js'

const Sidebar = ({drawer, dispatch}) => (
  <Drawer className="text-white">
    <div>
      <PageHeader onClose={() => dispatch(toggleDrawer())}/>
      <nav className="nav text-white flex-column">
        {sidebarRoutes.map(({name, icon, label}) =>
          <NavLink key={name} name={name} className="nav-link">
            <Icon name={icon} className="mr-2"/>
            {label}
          </NavLink>
        )}
      </nav>
    </div>
  </Drawer>
)

export default withDrawer(Sidebar);