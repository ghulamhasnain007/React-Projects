import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const GlobalContext = createContext();
const useGlobalContext = ()=> useContext(GlobalContext)

function AppContext({children}) {

    const [user, setUser] = useState({})
    const [showUser, setShowUser] = useState(false)

  return (
    <div>
        <GlobalContext.Provider value={{user, showUser ,setUser, setShowUser}}>
            {children}
        </GlobalContext.Provider>
    </div>
  )
}

export default AppContext
export { useGlobalContext }