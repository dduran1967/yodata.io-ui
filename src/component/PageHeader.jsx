// @flow
import React from 'react';
import {Icon, Button, Link} from '../component';
import styled from 'styled-components';
import ui from '../store/ui';

const StyledPageHeader = styled.header`
    display:         flex;
    flex-direction:  row;
    justify-content: space-between;
    align-items:     center;
    width:           100%;
    min-height:      96px;
    height:          96px;
    border-bottom:   solid 1px rgba(0, 0, 0, .25);
    color:           currentColor;
    button: {
      height: 24px;
      line-height: 36px;
      vertical-align: middle;
    }
`

class PageHeader extends React.Component {
  render() {
    let {title, onBack, onNext, onClose, potentialAction} = this.props
    let height = '24';
    return (
      <StyledPageHeader>

        <div className="text-left d-flex">
          {!ui.sidebar.open &&
          <Button onClick={()=>ui.toggleSidebar()}><Icon name="menu" height={height} width={height}/></Button>
          }
          {onBack &&
          <Link style={{display:'flex',alignItems:'center'}} to={'..'} onClick={()=>onBack()}><Icon name="back" height={height} width={height}/></Link>
          }
          <h2 className="d-inline-block pl-3">{title}</h2>
        </div>
        <div className="text-right d-flex">
          {potentialAction && potentialAction.map(action => (
            <Button key={Math.random()} onClick={action.onClick} rounded big>{action.name}</Button>
          ))
          }
          {onNext &&
          <Button onClick={()=>onNext()}><Icon name="next" height={height} width={height}/></Button>
          }
          {onClose &&
          <Button onClick={()=>onClose()}><Icon name="close" height={height} width={height}/></Button>
          }
        </div>
      </StyledPageHeader>
    )
  }
}

PageHeader.propTypes = {
  title:       React.PropTypes.string,
  onNavToggle: React.PropTypes.func,
  onBack:      React.PropTypes.func,
  onNext:      React.PropTypes.func,
  onClose:     React.PropTypes.func,
}

export default PageHeader;
