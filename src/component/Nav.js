import React from 'react'
import Link from './Link'
import Icon from './Icon'
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
  text-decoration: none;
  font-size: 1.5em;
  line-height: 3;
  padding: 0 .5rem;
  &:hover, &:focus {
    background-color: rgba(255,255,255,.2);
    color: white;
    text-decoration: none;
  }
  svg {
    height: 28px;
    width: 28px;
    margin: 16px 0;
  }
`

export default Nav;