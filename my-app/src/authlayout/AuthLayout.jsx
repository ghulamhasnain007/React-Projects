import React from 'react'
import AuthHeader from '../components/AuthHeader'
import { Outlet } from 'react-router-dom'

function AuthLayout({children}) {
  return (
    <div>
        <AuthHeader/>
        <Outlet/>
    </div>
  )
}

export default AuthLayout