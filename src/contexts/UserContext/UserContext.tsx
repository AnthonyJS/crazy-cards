import { createContext, useState, useContext } from 'react'

type UserDetailsProps = {
  firstName: string
  lastName: string
  annualIncome: string
  employmentStatus: string
}

type UserContextProps = {
  userDetails: UserDetailsProps
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetailsProps>>
}

const initialUserValues: UserDetailsProps = {
  firstName: '',
  lastName: '',
  annualIncome: '',
  employmentStatus: ''
}

const initialContextValues: UserContextProps = {
  userDetails: initialUserValues,
  setUserDetails: () => {}
}

const UserContext = createContext<UserContextProps>(initialContextValues)

const UserProvider: React.FC = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserDetailsProps>(
    initialUserValues
  )

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => useContext<UserContextProps>(UserContext)

export { UserProvider, useUserContext }
