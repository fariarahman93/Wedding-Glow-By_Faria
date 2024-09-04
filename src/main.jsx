import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/login",
        element:<Login></Login>
      },
      {
      path: "/register",
       element: <Register></Register>,
        },

    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
       <RouterProvider router={router} />
  </StrictMode>,
)
