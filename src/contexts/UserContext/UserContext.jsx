import { createContext, useState, useContext } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({})

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => useContext(UserContext)

export { UserProvider, useUserContext }
