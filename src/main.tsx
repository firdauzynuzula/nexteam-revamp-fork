import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Home } from '@/pages/Home';
import { Portofolio } from '@/pages/Portofolio';
import { Team } from '@/pages/Team';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "team",
        element: <Team />
      },
      {
        path: "portofolio",
        element: <Portofolio />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
