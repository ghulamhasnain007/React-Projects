import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import SearchAppBar from './components/Navbar'
import FetchUserData from './components/FetchUserData'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <SearchAppBar/> */}
      <FetchUserData/>
    </>
  )
}

export default App
