import { useUserContext } from 'contexts/UserContext'
import eligibility from 'business-logic/eligibility'
import { useEffect, useState, useReducer } from 'react'
import availableCards from 'business-logic/availableCards'
import Card from 'components/organisms/card'

const actions = {
  SELECT_CARD: 'SELECT_CARD'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SELECT_CARD:
      return state.includes(action.payload)
        ? [...state.filter(item => item != action.payload)]
        : [...state, action.payload]
    default:
      return state
  }
}

const CardsForUser = () => {
  const { userDetails } = useUserContext()
  const [cards, setCards] = useState([])

  const [selectedCards, dispatch] = useReducer(reducer, [])

  const clickHandler = id => {
    dispatch({ type: actions.SELECT_CARD, payload: id })
  }

  useEffect(() => setCards(eligibility(userDetails, availableCards)), [])

  return (
    <div>
      <pre>{JSON.stringify(userDetails)}</pre>
      <pre>{JSON.stringify(cards)}</pre>
      {cards.map(card => (
        <Card
          onClick={() => clickHandler(card.id)}
          selected={selectedCards.includes(card.id)}
          key={card.id}
          {...card}
        />
      ))}
    </div>
  )
}

export default CardsForUser
