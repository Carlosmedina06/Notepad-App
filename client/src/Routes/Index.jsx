import { createBrowserRouter } from 'react-router-dom'

import Layout from '../Layout/Layout'
import Archived from '../Pages/Archived/Archived'
import Home from '../Pages/Home/Home'
import NotFound from '../Pages/NotFound/NotFound'

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
