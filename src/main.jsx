import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Donation from './Component/Donation/Donation.jsx';
import FontPage from './Component/FontPage/FontPage.jsx';
import Chart from './Component/Chart/Chart.jsx';
import SinglePage from './Component/SinglePage/SinglePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <FontPage></FontPage>,
      },
      {
        path: "donation",
        element: <Donation></Donation>,
      },
      {
        path: "donation",
        element: <Donation></Donation>,
      },
      {
        path: "Statistics",
        element: <Chart></Chart>,
      },
      {
        path: "donate/:id",
        element: <SinglePage></SinglePage>,
      }
      
    ],
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
