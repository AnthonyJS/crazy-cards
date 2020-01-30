import { useUserContext } from 'contexts/UserContext'
import eligibility from 'business-logic/eligibility'
import { useEffect, useState, useReducer } from 'react'
import Card from 'components/organisms/card'
import { Text } from 'components/atoms'
import styled from 'styled-components'
import axios from 'axios'

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
  const [availableCards, setAvailableCards] = useState([])

  const [selectedCards, dispatch] = useReducer(reducer, [])

  const clickHandler = id => {
    dispatch({ type: actions.SELECT_CARD, payload: id })
  }

  useEffect(() => {
    const loadAvailableCards = async () => {
      const cards = await axios.get('/api/availablecards')
      setAvailableCards(cards.data)
    }
    loadAvailableCards()
  }, [])

  useEffect(() => setCards(eligibility(userDetails, availableCards)), [
    availableCards
  ])

  return (
    <div>
      <Fixed>
        <CreditAvailable
          amount={availableCards
            .filter(card => selectedCards.includes(card.id))
            .reduce((acc, curr) => acc + curr.creditAvailable, 0)}
        />
      </Fixed>
      {/* <pre>{JSON.stringify(userDetails)}</pre>
      <pre>{JSON.stringify(cards)}</pre> */}
      <Text variant="title">Click on a card to add it to your basket</Text>
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

const Fixed = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: teal;
`

const CreditAvailable = ({ amount }) => (
  <div>
    <Text variant="subHeading">Credit available:&nbsp;</Text>
    <Text variant="heading">£{amount}</Text>
  </div>
)

export default CardsForUser
