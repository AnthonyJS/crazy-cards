import styled from 'styled-components'
import { variant, fontFamily } from 'styled-system'

const Text = styled.div(
  {
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  variant({
    prop: 'size',
    variants: {
      big: {
        fontSize: 5
      },
      medium: {
        fontSize: 3
      },
      small: {
        fontSize: 1
      }
    }
  })
)

export default Text
