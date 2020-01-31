import styled from 'styled-components'
import media from 'constants/deviceWidths'
import { flexbox } from 'styled-system'

// Styled System has put 'justifyItems' in '${flexbox}'
// even though it also applies to CSS Grid
// https://styled-system.com/table/#flexbox
const Grid = styled.div`
  ${flexbox};
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 40px;

  ${media.m`
    grid-template-columns: 1fr 1fr;
  `}
`

export default Grid
