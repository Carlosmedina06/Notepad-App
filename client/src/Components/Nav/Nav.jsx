import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FcViewDetails } from 'react-icons/fc'

import { Container, NavItem, NavMenu } from './NavStyle'

const Nav = () => {
  return (
    <Container>
      <NavItem>
        <Link to="/">
          <NavMenu>
            <FcViewDetails />
            <p>Note App</p>
          </NavMenu>
        </Link>
      </NavItem>
      <NavItem>
        <NavMenu>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/archived">Archived</NavLink>
          </li>
        </NavMenu>
      </NavItem>
    </Container>
  )
}

export default Nav
