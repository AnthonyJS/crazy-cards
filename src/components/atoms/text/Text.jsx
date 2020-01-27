import styled from 'styled-components'
import { variant, fontFamily, lineHeight } from 'styled-system'

const Text = styled.span(
  {
    fontFamily: 'Arial, Helvetica, sans-serif',
    lineHeight: '2em'
  },
  variant({
    variants: {
      heading: {
        fontSize: 5
      },
      subHeading: {
        fontSize: 4
      },
      body: {
        fontSize: 1
      },
      bodyBold: {
        fontSize: 1,
        fontWeight: 800
      }
    }
  })
)

Text.defaultProps = {
  variant: 'body'
}

export default Text
