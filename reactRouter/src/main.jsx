import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Home from './Pages/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import AuthLayout from './AuthLayout.jsx'
import Login from './Auth/Login/Login.jsx'
import SignUp from './Auth/SignUp/SignUp.jsx'
import Github from './Pages/Github/Github.jsx'
import { githubInfo } from './Pages/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user/:userid' element={<User/>}/>
        <Route
         loader={githubInfo}
         path='/github'
         element={<Github/>}
         />
      </Route>
      <Route element={<AuthLayout/>}> {/* Render AuthLayout for login and sign up routes */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
