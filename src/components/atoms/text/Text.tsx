import styled from 'styled-components'
import { variant } from 'styled-system'

interface Props {
  variant?: string | {}
}

const Text = styled.span<Props>(
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
      },
      fixedWidth: {
        fontSize: '0.7em',
        lineHeight: '1em',
        fontFamily: 'Courier',
        fontWeight: 1000
      },
      fixedWidthBig: {
        fontSize: '1.2em',
        lineHeight: '1em',
        fontFamily: 'Courier',
        fontWeight: 100
      }
    }
  })
)

Text.defaultProps = {
  variant: 'body'
}

export default Text
