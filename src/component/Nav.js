import Link from './Link'
import styled from 'styled-components'

export const Nav = styled.nav`
  margin: 0;
  padding: 0;
  color: white;
`

export const NavLink = styled(Link)`
  display:     flex;
  flex-direction: row;
  align-items:  flex-start;
  color: inherit;
  border-bottom: solid 1px #555;
  padding: 16px;
  font-size: 16px;
  text-decoration: none;
  &:hover, &:focus {
    background-color: rgba(255,255,255,.2);
    color: white;
    text-decoration: none;
  }
  svg {
    height: 24px;
    width: 24px;
  }
`

export default Nav;