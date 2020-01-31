import styled from 'styled-components'

const Button = styled.button`
  background: linear-gradient(to right, #9733ee, #da22ff);
  border-radius: 40px;
  padding: 20px 40px 20px 40px;
  color: white;
  opacity: 0.8;
  box-shadow: 10px 10px 13px -9px rgba(0, 0, 0, 0.47);
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`

export default Button
