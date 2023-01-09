import React from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'
import GlobalStyle from '../GlobalStyles'
import Themes from '../Theme/Themes'

import { LayoutStyle } from './LayoutStyle'

const Layout = () => {
  return (
    <ThemeProvider theme={Themes['DarkTheme']}>
      <LayoutStyle>
        <GlobalStyle />
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
      </LayoutStyle>
    </ThemeProvider>
  )
}

export default Layout
