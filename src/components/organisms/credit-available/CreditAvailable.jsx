import { Text } from 'components/atoms'
import styled from 'styled-components'

const CreditAvailable = ({ allCards, cardsChosenByUser }) => (
  <Fixed>
    <Text variant="subHeading">Credit available:&nbsp;</Text>
    <Text variant="heading">
      £{calculateAvailableCreditForUser(allCards, cardsChosenByUser)}
    </Text>
  </Fixed>
)

const calculateAvailableCreditForUser = (allCards, cardsChosenByUser) =>
  allCards
    .filter(card => cardsChosenByUser.includes(card.id))
    .reduce((acc, curr) => acc + curr.creditAvailable, 0)

const Fixed = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: teal;
`

export default CreditAvailable
