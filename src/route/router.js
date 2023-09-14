import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import React from 'react';
import AdminPage from "../pages/adminPage/adminPage"

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <AdminPage />,
  }
])

export default function Router(){
  return <RouterProvider router={router} />
}