import cardData from 'constants/cardData'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'constants/theme'
import CardsForUser from '../CardsForUser'
import { useCardsForUserFilter } from '../useCardsForUserFilter'

jest.mock('../useCardsForUserFilter', () => ({
  useCardsForUserFilter: jest.fn()
}))

describe('<CardsForUser />', () => {
  test('Should render all cards with none selected', () => {
    useCardsForUserFilter.mockImplementation(() => [
      () => {},
      cardData,
      [],
      cardData
    ])

    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <CardsForUser
          allCards={cardData}
          cardsChosenByUser={[]}
          possibleCardsForUser={cardData}
        />
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('Should render 2 cards with one selected', () => {
    useCardsForUserFilter.mockImplementation(() => [
      () => {},
      cardData,
      [],
      cardData.slice(0, 2)
    ])
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <CardsForUser
          allCards={cardData}
          cardsChosenByUser={[1]}
          possibleCardsForUser={cardData.slice(0, 2)}
        />
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
