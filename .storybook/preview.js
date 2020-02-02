import { addDecorator } from '@storybook/react'
import withNormalize from './normalizeDecorator'
import GlobalStyle from 'constants/globalStyle'

function withGlobalStyles(storyFn) {
  return (
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  )
}

addDecorator(withGlobalStyles)
addDecorator(withNormalize)
