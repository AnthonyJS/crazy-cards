import styled from 'styled-components'
import { variant, fontFamily, lineHeight } from 'styled-system'

const Text = styled.span(
  {},
  variant({
    variants: {
      heading: {
        fontSize: '5em',
        lineHeight: '2em'
      },
      subHeading: {
        fontSize: '4em',
        lineHeight: '1.5em'
      },
      title: {
        fontSize: '2em',
        lineHeight: '1.5em'
      },
      body: {
        fontSize: '1.5em'
      },
      bodyBold: {
        fontSize: '1.5em',
        fontWeight: 800
      },
      error: {
        fontSize: '1.5em',
        color: 'red'
      }
    }
  })
)

Text.defaultProps = {
  variant: 'body'
}

export default Text
