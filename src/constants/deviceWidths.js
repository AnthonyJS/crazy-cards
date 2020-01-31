import { css } from 'styled-components'

const smallMinWidth = 320
const mediumMinWidth = 764
const largeMinWidth = 1028
const extraLargeMinWidth = 1366

export const sizes = {
  xl: extraLargeMinWidth,
  l: largeMinWidth,
  m: mediumMinWidth,
  s: smallMinWidth
}

// Iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
