import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FcViewDetails } from 'react-icons/fc'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

import { ButtonTheme, Container, NavItem, NavMenu } from './NavStyle'

const Nav = ({ tema, setTema }) => {
  const changeMode = () => {
    if (tema === 'DarkTheme') setTema('LightTheme')
    if (tema === 'LightTheme') setTema('DarkTheme')
  }

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
          <ButtonTheme onClick={() => changeMode()}>
            {tema === 'DarkTheme' ? <HiOutlineSun /> : <HiOutlineMoon />}
          </ButtonTheme>
          <li />
        </NavMenu>
      </NavItem>
    </Container>
  )
}

export default Nav
