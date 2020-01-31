import { useUserContext } from 'contexts/UserContext'
import eligibility from 'business-logic/eligibility'
import { useEffect, useState, useReducer } from 'react'
import Card from 'components/organisms/card'
import { Text } from 'components/atoms'
import styled from 'styled-components'
import axios from 'axios'
import Link from 'next/link'
import { actions, reducer } from './cardSelectionReducer'

const CardsForUser = () => {
  const { userDetails } = useUserContext()
  const [possibleCardsForUser, setPossibleCardsForUser] = useState([])
  const [allCards, setAllCards] = useState([])
  const [cardsChosenByUser, dispatchCardsChosenByUser] = useReducer(reducer, [])

  const clickHandler = id => {
    dispatchCardsChosenByUser({
      type: actions.TOGGLE_CARD_SELECTION,
      payload: id
    })
  }

  useEffect(() => {
    const loadAvailableCards = async () => {
      const cards = await axios.get('/api/all-cards')
      setAllCards(cards.data)
    }
    loadAvailableCards()
  }, [])

  useEffect(() => setPossibleCardsForUser(eligibility(userDetails, allCards)), [
    allCards
  ])

  return (
    <div>
      <Fixed>
        <CreditAvailable
          amount={allCards
            .filter(card => cardsChosenByUser.includes(card.id))
            .reduce((acc, curr) => acc + curr.creditAvailable, 0)}
        />
      </Fixed>
      <Text variant="title">Click on a card to add it to your basket</Text>
      {possibleCardsForUser.map(card => (
        <Card
          onClick={() => clickHandler(card.id)}
          selected={cardsChosenByUser.includes(card.id)}
          key={card.id}
          {...card}
        />
      ))}
      <Link href="/">
        <a>Back</a>
      </Link>
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
