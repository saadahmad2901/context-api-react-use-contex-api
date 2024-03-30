
import './App.css'
import LoginPage from './components/LoginPage'

import Profile from './components/Profile'
// import UserContextProvider from '../context/UserContextProvider'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
     <LoginPage/>
      <Profile />
    </UserContextProvider>
  )
}

export default App


