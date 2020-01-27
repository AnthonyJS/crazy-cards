import { useUserContext } from 'contexts/UserContext'
import eligibility from 'business-logic/eligibility'
import { useEffect, useState } from 'react'
import availableCards from 'business-logic/availableCards'
import Card from 'components/organisms/card'

const CardsForUser = () => {
  const { userDetails } = useUserContext()
  const [cards, setCards] = useState([])

  useEffect(() => setCards(eligibility(userDetails, availableCards)), [])

  return (
    <div>
      <pre>{JSON.stringify(userDetails)}</pre>
      <pre>{JSON.stringify(cards)}</pre>
      {cards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  )
}

export default CardsForUser
