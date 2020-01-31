import { Text, Alignment } from 'components/atoms'
import styled from 'styled-components'

const CreditAvailable = ({ allCards, cardsChosenByUser }) => (
  <Fixed>
    <Alignment justifyContent="center" alignItems="center">
      <Text variant="subHeading" color="white">
        Credit available:&nbsp;
      </Text>
      <Text variant="heading">
        £{calculateAvailableCreditForUser(allCards, cardsChosenByUser)}
      </Text>
    </Alignment>
  </Fixed>
)

const calculateAvailableCreditForUser = (allCards, cardsChosenByUser) =>
  allCards
    .filter(card => cardsChosenByUser.includes(card.id))
    .reduce((acc, curr) => acc + curr.creditAvailable, 0)

const Fixed = styled.div`
  position: sticky;
  border-radius: 100px;
  top: 10px;
  z-index: 10;
  color: ${({ theme }) => theme.colors.light};
  background: linear-gradient(to right, #dc2430, #7b4397);
`

export default CreditAvailable
