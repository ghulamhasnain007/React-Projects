import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,
  RouterProvider,} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import AuthLayout from './authlayout/AuthLayout';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    // path : '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  },
  {
    // path: '/auth',
    element: <AuthLayout/>,
    children:[
      {
      path:'/auth',
      element: <Login/>
      },
      {
      path:'/register',
      element: <SignUp/>
      },
    
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
