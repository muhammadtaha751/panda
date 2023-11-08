import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
  } from "react-router-dom"
import SignIn from "../view/SignIn";
import SignUp from "../view/SignUp";
import LandingPage from "../view/LandingPage";
import Dashboard from "../view/Dashboard";
import ResDetail from "../view/ResDetail";
import { useSelector } from 'react-redux'
import CartPage from "../view/CartPage";
import { useState } from "react";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [,
        {
          path: "/",
          element: <LandingPage/>,
        },

        {
          path: "/SignIn",
          element: <SignIn/>,
        },

        {
            path: "/SignUp",
            element: <SignUp/>,
          },

          {
            path: "/landingpage",
            element: <LandingPage/>,
          },

          {
            path: "/dashboard",
            element: <Dashboard/>,
          },
       
          {
            path: "/resdetail/:resdetai_id",
            element: <ResDetail/>,
          },

          {
            path: "/Cart",
            element: <CartPage/>,
          },
      
      ]
  
    }
  ]);
  
  function Router() {
    return <RouterProvider router={router} />
  }
  
  function Main() {
   
    const navigate = useNavigate()

    return <div >

      <CartPage/>
      
  <Outlet/>
    </div>
  }
  
  export default Router