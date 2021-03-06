import { useUserContext } from 'contexts/UserContext'
import eligibility from 'business-logic/eligibility'
import { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import { actions, reducer } from './cardSelectionReducer'
import CardsForUserMarkup from './CardsForUserMarkup'

const CardsForUser = () => {
  const { userDetails } = useUserContext()
  const [allCards, setAllCards] = useState([])
  const [possibleCardsForUser, setPossibleCardsForUser] = useState([])
  const [cardsChosenByUser, dispatchCardsChosenByUser] = useReducer(reducer, [])

  const cardSelectionHandler = id => {
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
    <CardsForUserMarkup
      allCards={allCards}
      cardsChosenByUser={cardsChosenByUser}
      possibleCardsForUser={possibleCardsForUser}
      cardSelectionHandler={cardSelectionHandler}
    />
  )
}

export default CardsForUser
