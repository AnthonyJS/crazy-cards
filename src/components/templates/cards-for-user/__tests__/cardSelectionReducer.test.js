import { actions, reducer } from '../cardSelectionReducer'
import cardData from 'constants/cardData'

describe('Card selection reducer', () => {
  test('Should add card to state if not present', () => {
    const initialState = []

    const action = {
      type: actions.TOGGLE_CARD_SELECTION,
      payload: cardData[0]
    }

    const state = reducer(initialState, action)

    expect(state).toHaveLength(1)
    expect(state[0].cardTitle).toBe('Student Life')
  })

  test('Should remove card from state if already present', () => {
    const initialState = [cardData[0]]

    const action = {
      type: actions.TOGGLE_CARD_SELECTION,
      payload: cardData[0]
    }

    const state = reducer(initialState, action)

    expect(state).toHaveLength(0)
  })
})
