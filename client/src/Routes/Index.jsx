import { createBrowserRouter } from 'react-router-dom'

import Layout from '../Layout/Layout'
import Archived from '../Pages/Archived'
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
      {
        path: '/archived',
        element: <Archived />,
      },
    ],
  },
])

export default Router
