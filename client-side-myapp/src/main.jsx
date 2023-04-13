import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home';
import Phones from './components/Phones';
import ErrorPage from './components/ErrorPage';
import Layout from './components/Layout';
import PhoneDetails from './components/PhoneDetails';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/phones",
        element: <Phones/>,
        loader: () => fetch('http://localhost:3000/phones')
      },
      {
        path: "/phones/:id",
        element: <PhoneDetails/>,
        loader: ({params}) => fetch(`http://localhost:3000/phones/${params.id}`)
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
