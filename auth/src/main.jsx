import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NameContext from './context/NameContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     // path : '/',
//     element: <MainLayout/>,
//     children: [
//       {
//         path: '/',
//         element: <App/>
//       },
//       {
//         path: '/about',
//         element: <About/>
//       }
//     ]
//   },
//   {
//     // path: '/auth',
//     element: <AuthLayout/>,
//     children:[
//       {
//       path:'/auth',
//       element: <Login/>
//       },
//       {
//       path:'/register',
//       element: <SignUp/>
//       },
    
//     ]
//   }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NameContext>
      <App />
    </NameContext>
  </React.StrictMode>,
)
