import styled from 'styled-components'
import { flexbox } from 'styled-system'
import Box from 'components/atoms/box'

interface Props {
  justifyContent: string
}

const Alignment = styled(Box)<Props>`
  display: flex;
  ${flexbox}
`

export default Alignment
