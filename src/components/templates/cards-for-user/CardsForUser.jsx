import { useUserContext } from 'contexts/UserContext'

const CardsForUser = () => {
  const { userDetails } = useUserContext()

  return <pre>{JSON.stringify(userDetails)}</pre>
}

export default CardsForUser
