import { css, ThemedCssFunction } from 'styled-components'

const smallMinWidth = 320
const mediumMinWidth = 764
const largeMinWidth = 1028
const extraLargeMinWidth = 1366

interface ISizes {
  xl: number
  l: number
  m: number
  s: number
}

export const sizes: ISizes = {
  xl: extraLargeMinWidth,
  l: largeMinWidth,
  m: mediumMinWidth,
  s: smallMinWidth
}

interface ITheme {}

// Iterate through the sizes and create a media template
export default (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `

    return acc
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<ITheme> }
)

// export default Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${sizes[label]}px) {
//       ${css(...args)};
//     }
//   `
//   return acc
// }, {})
