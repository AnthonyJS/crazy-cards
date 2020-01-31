import { useUserContext } from 'contexts/UserContext'
import eligibility from 'business-logic/eligibility'
import { useEffect, useState, useReducer } from 'react'
import { Card, CreditAvailable } from 'components/organisms'
import { Text, Grid, Alignment } from 'components/atoms'
import axios from 'axios'
import Link from 'next/link'
import { actions, reducer } from './cardSelectionReducer'

const CardsForUser = () => {
  const { userDetails } = useUserContext()
  const [allCards, setAllCards] = useState([])
  const [possibleCardsForUser, setPossibleCardsForUser] = useState([])
  const [cardsChosenByUser, dispatchCardsChosenByUser] = useReducer(reducer, [])

  const clickHandler = id => {
    dispatchCardsChosenByUser({
      type: actions.TOGGLE_CARD_SELECTION,
      payload: id
    })
  }

  useEffect(() => {
    const getAllCardsFromApi = async () => {
      const cards = await axios.get('/api/all-cards')
      setAllCards(cards.data)
    }
    getAllCardsFromApi()
  }, [])

  useEffect(() => setPossibleCardsForUser(eligibility(userDetails, allCards)), [
    allCards
  ])

  return (
    <>
      <CreditAvailable
        allCards={allCards}
        cardsChosenByUser={cardsChosenByUser}
      />
      <Alignment justifyContent="center" py={3}>
        <Text variant="title">Click on a card to add it to your basket</Text>
      </Alignment>
      <Grid justifyItems="center">
        {possibleCardsForUser.map(card => (
          <Card
            onClick={() => clickHandler(card.id)}
            selected={cardsChosenByUser.includes(card.id)}
            key={card.id}
            {...card}
          />
        ))}
      </Grid>
      <Link href="/">
        <a>Back</a>
      </Link>
    </>
  )
}

export default CardsForUser
