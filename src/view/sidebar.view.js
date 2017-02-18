import React from 'react';
import {Drawer, PageHeader, Nav, NavLink, Icon} from '../component';

function Sidebar({open, toggleSidebar, onNav}) {
  return (
    <div>
      <Drawer open={open} style={{color:'white'}}>
        <div className="px-3">
          <PageHeader
            title="Yodata"
            onClose={toggleSidebar}
          />
        </div>

        <Nav stacked>
          <NavLink to="/" onClick={toggleSidebar} >
            <Icon name="home" style={{marginRight: '1em'}}/>
            Home
          </NavLink>
          <NavLink to="/stream/" onClick={toggleSidebar}>
            <Icon name="stream" style={{marginRight: '1em'}}/>
            Streams
          </NavLink>
          <NavLink to="/action" onClick={toggleSidebar}>
            <Icon name="applications" style={{marginRight: '1em'}}/>
            Actions
          </NavLink>
          {/*<NavLink to="/type">*/}
            {/*<Icon name="code" style={{marginRight: '1em'}}/>*/}
            {/*Types*/}
          {/*</NavLink>*/}
          {/*<NavLink to="/documents" >*/}
            {/*<Icon name="documents" style={{marginRight: '1em'}}/>*/}
            {/*Documents*/}
          {/*</NavLink>*/}
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
