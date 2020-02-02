import { Card, CreditAvailable } from 'components/organisms'
import { Grid } from 'components/atoms'
import Link from 'next/link'

const CardsForUserMarkup = ({
  allCards,
  cardsChosenByUser,
  possibleCardsForUser,
  cardSelectionHandler
}) => (
  <>
    <CreditAvailable
      allCards={allCards}
      cardsChosenByUser={cardsChosenByUser}
    />
    <Grid justifyItems="center">
      {possibleCardsForUser.map(card => (
        <Card
          onClick={() => cardSelectionHandler(card.id)}
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

export default CardsForUserMarkup
