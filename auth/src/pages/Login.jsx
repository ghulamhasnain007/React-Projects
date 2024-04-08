import React from 'react'
import { useUserContext } from '../context/NameContext'

function Login() {
    const {user} = useUserContext()
    console.log(user)
    
  return (
    <div>
        <form>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button>Login</button>
        </form>
        {/* {user.map(data => data.name)} */}
    </div>
  )
}

export default Login