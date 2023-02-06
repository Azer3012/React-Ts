import React, { useContext } from 'react'
import { UserContext } from './UserContext'



const User = () => {

  const user=useContext(UserContext)
    const handleLogin=()=>{
      user?.setUser({
        name:"Azer",
        email:"aaa@gmail.com"
      })
    }
    const handleLogout=()=>{
      user?.setUser(null)
    }
  return (

    <div>

        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>log out</button>
        <div>USer name is {user?.user?.name}</div>
        <div>USer email is {user?.user?.email}</div>
    </div>
  )
}

export default User