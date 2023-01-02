import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container, NavItem, NavMenu } from './NavStyle'

const Nav = () => {
  return (
    <Container>
      <NavItem>
        <NavLink to="/">LOGO</NavLink>
      </NavItem>
      <NavItem>
        <NavMenu>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Archived</NavLink>
          </li>
        </NavMenu>
      </NavItem>
    </Container>
  )
}

export default Nav
