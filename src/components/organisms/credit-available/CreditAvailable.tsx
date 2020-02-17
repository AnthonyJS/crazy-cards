import { Text, FixedLabel } from 'components/atoms'

interface ICreditAvailable {
  allCards: ICard[]
  cardsChosenByUser: number[]
}

interface ICard {
  id: number
  creditAvailable: number
}

const CreditAvailable = ({ allCards, cardsChosenByUser }: ICreditAvailable) => {
  const creditAvailable = calculateAvailableCreditForUser(
    allCards,
    cardsChosenByUser
  )

  return (
    <FixedLabel>
      {creditAvailable === 0 ? (
        <Text variant={{ s: 'body', m: 'subHeading' }}>
          Click the cards 💳 to choose
        </Text>
      ) : (
        <>
          <Text variant={{ s: 'body', m: 'subHeading' }} color="white">
            Credit available:&nbsp;
          </Text>
          <Text variant={{ s: 'body', m: 'subHeading' }}>
            £{creditAvailable}
          </Text>
        </>
      )}
    </FixedLabel>
  )
}

const calculateAvailableCreditForUser = (
  allCards: ICard[],
  cardsChosenByUser: number[]
) =>
  allCards
    .filter((card: ICard) => cardsChosenByUser.includes(card.id))
    .reduce((acc: number, curr: ICard) => acc + curr.creditAvailable, 0)

export default CreditAvailable
export { calculateAvailableCreditForUser }
