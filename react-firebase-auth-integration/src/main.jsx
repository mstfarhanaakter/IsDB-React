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
