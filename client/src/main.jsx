import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import GlobalStyle from './GlobalStyles'
import Home from './Pages/Home'
import Router from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={Router}>
      <Home />
    </RouterProvider>
  </React.StrictMode>,
)
