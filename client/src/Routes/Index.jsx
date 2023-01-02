import { createBrowserRouter } from 'react-router-dom'

import Layout from '../Layout/Layout'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

export default Router
