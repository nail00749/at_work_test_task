import { createBrowserRouter } from 'react-router-dom'

import { HomePage, UpdatePage } from '@/pages'
import Root from '@/core/routes/root.tsx'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/update/:id',
        element: <UpdatePage />
      }
    ]
  }

])