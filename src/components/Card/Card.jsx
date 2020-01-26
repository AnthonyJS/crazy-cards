import styled from 'styled-components'

const Card = ({ name, status, salary }) => (
  <CardStyled>
    <Centred>{name}</Centred>
    <div>{status}</div>
    <div>{salary}</div>
  </CardStyled>
)

const Centred = styled.div`
  align-items: center;
`

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  border-radius: 25px;
  padding: 20px;
  border: 1px solid #aaa;

  box-shadow: 10px 10px 16px #888888;
`

export default Card
