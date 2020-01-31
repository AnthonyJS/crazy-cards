import { Text, Alignment } from 'components/atoms'
import styled from 'styled-components'

const CreditAvailable = ({ allCards, cardsChosenByUser }) => {
  const creditAvailable = calculateAvailableCreditForUser(
    allCards,
    cardsChosenByUser
  )

  return (
    <Fixed>
      <Alignment justifyContent="center" py={2} alignItems="center">
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
      </Alignment>
    </Fixed>
  )
}

const calculateAvailableCreditForUser = (allCards, cardsChosenByUser) =>
  allCards
    .filter(card => cardsChosenByUser.includes(card.id))
    .reduce((acc, curr) => acc + curr.creditAvailable, 0)

const Fixed = styled.div`
  position: sticky;
  top: 10px;
  z-index: 10;
  color: ${({ theme }) => theme.colors.light};
  background: linear-gradient(to right, #1488cc, #2b32b2);
`

export default CreditAvailable
export { calculateAvailableCreditForUser }
