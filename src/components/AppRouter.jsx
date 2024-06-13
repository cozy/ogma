import React from 'react'
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom'
import AppLayout from 'src/components/AppLayout'
import { QuestionsEdit } from 'src/components/Views/QuestionsEdit'

const routes = [
  {
    path: 'questions',
    element: <AppLayout />,
    children: [
      {
        path: 'edit',
        element: <QuestionsEdit />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate replace to="/questions/edit" />
  }
]

const AppRouter = () => {
  const router = createHashRouter(routes)
  return <RouterProvider router={router} />
}

export default AppRouter
