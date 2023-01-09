import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Router from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}>
      <Home />
    </RouterProvider>
  </React.StrictMode>,
)
