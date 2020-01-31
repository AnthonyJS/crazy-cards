import { Text } from 'components/atoms'
import styled from 'styled-components'

const CreditAvailable = ({ amount }) => (
  <Fixed>
    <Text variant="subHeading">Credit available:&nbsp;</Text>
    <Text variant="heading">£{amount}</Text>
  </Fixed>
)

const Fixed = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: teal;
`

export default CreditAvailable
