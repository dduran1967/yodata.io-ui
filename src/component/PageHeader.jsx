// @flow
import React from 'react'
import {Icon, Button} from '../component'
import styled from 'styled-components'
import {withDrawer, toggleDrawer} from './Drawer'


const PageHeader = ({
  title,
  onBack,
  onNext,
  onClose,
  potentialAction,
  toggleNav,
  onAction,
  className,
  drawer,
  dispatch,
  ...rest
}) => {
  return (
    <header className={className}>
      <div className="text-left d-flex">
        {!drawer.open &&
        <Button onClick={()=>dispatch(toggleDrawer())}><Icon name="menu"/></Button>
        }
        {onBack &&
        <Button onClick={onBack}><Icon name="back"/></Button>
        }
        <span className="px-3">{title}</span>
      </div>
      <div className="text-right d-flex">
        {potentialAction && potentialAction.map(action => (
          <Button key={action.name} onClick={onAction} rounded big>{action.name}</Button>
        ))
        }
        {onNext &&
        <Button onClick={onNext}><Icon name="next"/></Button>
        }
        {onClose &&
        <Button onClick={onClose}><Icon name="close"/></Button>
        }
      </div>
    </header>
  )
}

const StyledPageHeader = styled(PageHeader)`
    display:         flex;
    flex-direction:  row;
    justify-content: space-between;
    align-items:     center;
    width:           100%;
    min-height:      96px;
    height:          96px;
    border-bottom:   solid 1px rgba(0, 0, 0, .25);
    color:           currentColor;
    font-size:       48px;
    line-height:     1;
    button {
      line-height:    inherit;
      vertical-align: middle;
    };
    svg {
      font-size: 48px;
      line-height: 48px;
      height: 48px;
      width: 48px;
    }
`

PageHeader.propTypes = {
  title:       React.PropTypes.string,
  onNavToggle: React.PropTypes.func,
  onBack:      React.PropTypes.func,
  onNext:      React.PropTypes.func,
  onClose:     React.PropTypes.func,
}

//const enhanced = compose(
//  withDrawer()
//)

export default withDrawer(StyledPageHeader)
