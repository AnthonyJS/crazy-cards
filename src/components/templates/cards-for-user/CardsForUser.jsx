import { useUserContext } from 'contexts/UserContext'
import eligibility from 'business-logic/eligibility'
import { useEffect, useState, useReducer } from 'react'
import availableCards from 'business-logic/availableCards'
import Card from 'components/organisms/card'
import Text from 'components/atoms/text'

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
      <CreditAvailable
        amount={availableCards
          .filter(card => selectedCards.includes(card.id))
          .reduce((acc, curr) => acc + curr.creditAvailable, 0)}
      />
      {/* <pre>{JSON.stringify(userDetails)}</pre>
      <pre>{JSON.stringify(cards)}</pre> */}
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

const CreditAvailable = ({ amount }) => (
  <div>
    <div>
      <Text variant="subHeading">Credit available</Text>
    </div>
    <Text variant="heading">£{amount}</Text>
  </div>
)

export default CardsForUser
