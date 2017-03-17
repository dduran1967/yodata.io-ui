import React from 'react'
import {Drawer, PageHeader, Icon, NavLink} from '../component'
import {sidebarRoutes} from '../router/routes.js'

const Sidebar = props => (
  <Drawer className="text-white">
    <div>
      <PageHeader/>
      <nav className="nav text-white flex-column">
        {sidebarRoutes.map(({name, icon, label}) =>
          <NavLink key={name} name={name} className="py-3 nav-link">
            <Icon name={icon} className="mr-2"/>
            {label}
          </NavLink>
        )}
      </nav>
    </div>
  </Drawer>
)

export default Sidebar;