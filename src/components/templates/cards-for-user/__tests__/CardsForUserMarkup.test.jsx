import CardsForUserMarkup from '../CardsForUserMarkup'
import cardData from 'constants/cardData'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'constants/theme'

describe('<CardsForUserMarkup />', () => {
  test('Should render all cards with none selected', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <CardsForUserMarkup
          allCards={cardData}
          cardsChosenByUser={[]}
          possibleCardsForUser={cardData}
        />
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('Should render 2 cards with one selected', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <CardsForUserMarkup
          allCards={cardData}
          cardsChosenByUser={[1]}
          possibleCardsForUser={cardData.slice(0, 2)}
        />
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
