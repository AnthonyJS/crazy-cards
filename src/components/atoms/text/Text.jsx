import styled from 'styled-components'
import { variant, fontFamily, lineHeight } from 'styled-system'

const Text = styled.span(
  {
    lineHeight: '2em'
  },
  variant({
    variants: {
      heading: {
        fontSize: '5em'
      },
      subHeading: {
        fontSize: '4em'
      },
      body: {
        fontSize: '1em'
      },
      bodyBold: {
        fontSize: '2em',
        fontWeight: 800
      }
    }
  })
)

Text.defaultProps = {
  variant: 'body'
}

export default Text
