import styled from 'styled-components'
import { Alignment } from 'components/atoms'

const FixedStyle = styled.div`
  position: sticky;
  top: 10px;
  z-index: 10;
  color: ${({ theme }) => theme.colors.light};
  background: linear-gradient(to bottom, #1488cc, rgba(20, 136, 204));
`

const Fixed = ({ children }) => (
  <FixedStyle>
    <Alignment justifyContent="center" p={2} alignItems="center">
      {children}
    </Alignment>
  </FixedStyle>
)

export default Fixed
