import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function MainLayout({children}) {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default MainLayout