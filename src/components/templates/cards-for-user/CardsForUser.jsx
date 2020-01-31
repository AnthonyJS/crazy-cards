import { useUserContext } from 'contexts/UserContext'
import eligibility from 'business-logic/eligibility'
import { useEffect, useState, useReducer } from 'react'
import { Card, CreditAvailable } from 'components/organisms'
import { Text } from 'components/atoms'
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
      <CreditAvailable
        amount={allCards
          .filter(card => cardsChosenByUser.includes(card.id))
          .reduce((acc, curr) => acc + curr.creditAvailable, 0)}
      />
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

export default CardsForUser
