import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Container, NavItem, NavMenu } from './NavStyle'

const Nav = () => {
  return (
    <Container>
      <NavItem>
        <Link to="/">LOGO</Link>
      </NavItem>
      <NavItem>
        <NavMenu>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/archive">Archived</NavLink>
          </li>
        </NavMenu>
      </NavItem>
    </Container>
  )
}

export default Nav
