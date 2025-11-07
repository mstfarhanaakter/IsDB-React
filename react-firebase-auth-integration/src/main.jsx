import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthContext/AuthProvider';
import PrivateRoute from './components/Routes/PrivateRoute';
import Order from './components/Order/Order';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';

// export const AuthContext = createContext(null);
// const userInfo ={
//   email:"farha@gmail.com"
// }

const router = createBrowserRouter([{
  path: "/",
  Component: Root,
  children: [{
    index: true,
    Component: Home,
  },
  {
    path: 'login',
    Component: Login
  },
  {
    path: "register",
    Component: Register
  },
  {
    path: 'order',
    // Component: Order
    element: <PrivateRoute>
      <Order></Order>
    </PrivateRoute>
  },
  {
    path:'profile',
    element: <PrivateRoute>
      <Profile></Profile>
    </PrivateRoute>
    
  },
  {
    path:'dashboard',
    element:<PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>
  }

  ]

}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <AuthContext value={userInfo}>
     <RouterProvider router={router}></RouterProvider>
   </AuthContext> */}

   <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
   </AuthProvider>


  </StrictMode>,
)
