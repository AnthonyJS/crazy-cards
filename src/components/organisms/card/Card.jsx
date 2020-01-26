import styled from 'styled-components'
import Alignment from 'components/atoms/alignment'
import Text from 'components/atoms/text'

const Card = ({ name, status, salary }) => (
  <CardStyled>
    <Alignment justifyContent="center">
      <Text as="h3" size="big">
        {name}
      </Text>
    </Alignment>
    <Text size="medium">{status}</Text>
    <Text size="small">{salary}</Text>
  </CardStyled>
)

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* TODO: Make these responsive */
  width: 350px;
  height: 200px;
  border-radius: 25px;
  padding: 20px;
  /* TODO: Use tokens for colors */
  border: 1px solid #aaa;
  box-shadow: 10px 10px 16px #888888;
`

export default Card
