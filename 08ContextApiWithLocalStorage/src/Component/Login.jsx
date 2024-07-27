import React from 'react'
import { useState , useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [userName , setUserName] = useState('')
    const [Password , setPassword] = useState('')
    const {setUser} = useContext(UserContext)
 
    const handelSumbit =(e)=>{
        debugger
        e.preventDefault()
        setUser({userName , Password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
        placeholder='User Name' />

        <input type="text" 
        value={Password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password' />

        <button onClick={handelSumbit}>
            Sumbit
        </button>
    </div>
  )
}

export default Login