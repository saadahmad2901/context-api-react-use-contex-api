import React from 'react'
import UserContext from '../context/userContext'
import { useContext } from 'react'
import { useState } from 'react'
import UserContextProvider from './context/userContextProvider'

const LoginPage = () => {

         const  [password , setPassword ] = () => {

         }
         const [ username ,setUsername] = () => {

         }
         const {setUser }=  useContext{ UserContext}
         const handleSubmitt = () => {
e.preventDefault(
         setUser ({username, password})
)
         }


  return (
    <div>
         <h1>Login</h1>
<input
value={username}
onChange={ (e) =>setUsername(e,target.value) }
 type="text" 
 placeholder='NAME'
 />
<input
value={password}
onChange={ (e) =>setPassword(e,target.value) }
 type="password"
   placeholder='Password'/>

<button onClick={handleSubmitt}>Submitt</button>

    </div>
  )
}


export default LoginPage