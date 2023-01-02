import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'

import { LayoutStyle } from './LayoutStyle'

const Layout = () => {
  return (
    <LayoutStyle>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LayoutStyle>
  )
}

export default Layout
