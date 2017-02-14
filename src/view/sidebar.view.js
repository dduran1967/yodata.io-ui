import React from 'react';
import {Drawer, PageHeader, Nav, NavLink, Icon} from '../component';

function Sidebar({open, toggleSidebar, onNav}) {
  return (
    <div>
      <Drawer open={open} style={{color:'white'}}>
        <PageHeader
          title="Yodata"
          onClose={toggleSidebar}
        />
        <Nav stacked>
          <NavLink to="/">
            <Icon name="home" style={{marginRight: '1em'}}/>
            Home
          </NavLink>
          <NavLink to="/type">
            <Icon name="code" style={{marginRight: '1em'}}/>
            Types
          </NavLink>
          <NavLink to="/action">
            <Icon name="applications" style={{marginRight: '1em'}}/>
            Actions
          </NavLink>
          <NavLink to="/documents" >
          <Icon name="documents" style={{marginRight: '1em'}}/>
          Documents
          </NavLink>
          {/*<NavLink to="/connect" >*/}
          {/*<Icon name="connect" style={{marginRight: '1em'}}/>*/}
          {/*Connect*/}
          {/*</NavLink>*/}
          {/*<NavLink to="/logs" >*/}
          {/*<Icon name="history" viewBox="0 0 26 24" style={{marginRight: '1em'}}/>*/}
          {/*History*/}
          {/*</NavLink>*/}
          {/*<NavLink to="/code" >*/}
          {/*<Icon name="code" style={{marginRight: '1em'}}/>*/}
          {/*Code*/}
          {/*</NavLink>*/}
        </Nav>
      </Drawer>
    </div>
  )
}

Sidebar.propTypes = {
  open: React.PropTypes.bool
}
Sidebar.defaultProps = {
  open: false
}

export default Sidebar;