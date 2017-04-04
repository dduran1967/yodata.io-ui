import {connect} from 'react-redux'
import styled from 'styled-components'
import {compose} from 'recompose'
import {createAction} from 'redux-actions'

const initialState = {
  open: false
}

export const toggleDrawer = createAction('DRAWER/TOGGLE_DRAWER')

export const drawerActions = {
  toggleDrawer
}

export const drawerReducer = (drawer = initialState, action) => {
  switch (action.type) {
    case 'DRAWER/TOGGLE_DRAWER':
      return { ...drawer, open: !drawer.open }
    case '@@router5/TRANSITION_SUCCESS':
      return { ...drawer, open: false }
    default:
      return drawer;
  }
}

export const withDrawer = compose(
  connect(state => ({drawer: state.drawer}))
)

const Drawer = styled.div`
  position:         fixed;
  left:             ${props => props.drawer.open ? '0' : '-280px'}
  display:          inline-block;
  width:            ${props => props.drawer.open ? '280px' : '0'}
  min-height:       100vh;
  background-color: #444;
  flex-direction:   column;
  flex-shrink:      0;
  z-index:          100;
  transition: all .2s ease-in-out;
`

export default withDrawer(Drawer);