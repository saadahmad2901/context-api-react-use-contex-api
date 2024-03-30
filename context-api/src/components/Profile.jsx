// import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'
const Profile = () => {
         const {user}   = useContext (UserContext)
         if (!user)  return <div> <h1>Please Login</h1></div>
  return  <div>  Welcome { user.username}</div>
}
export default Profile