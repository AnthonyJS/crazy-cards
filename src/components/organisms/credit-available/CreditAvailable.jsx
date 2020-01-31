import { Text, FixedLabel } from 'components/atoms'

const CreditAvailable = ({ allCards, cardsChosenByUser }) => {
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
          <Text variant="subHeading" color="white">
            Credit available:&nbsp;
          </Text>
          <Text variant="heading">£{creditAvailable}</Text>
        </>
      )}
    </FixedLabel>
  )
}

const calculateAvailableCreditForUser = (allCards, cardsChosenByUser) =>
  allCards
    .filter(card => cardsChosenByUser.includes(card.id))
    .reduce((acc, curr) => acc + curr.creditAvailable, 0)

export default CreditAvailable
export { calculateAvailableCreditForUser }
