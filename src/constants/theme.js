import { sizes } from 'constants/deviceWidths'

const breakpoints = ['0', `${sizes.m}px`, `${sizes.l}px`, `${sizes.xl}px`]

breakpoints.s = breakpoints[0]
breakpoints.m = breakpoints[1]
breakpoints.l = breakpoints[2]
breakpoints.xl = breakpoints[3]

const colors = Object.freeze({
  black: '#000e1a',
  white: '#fff',
  blue: '#007ce0',
  navy: '#004175',
  red: '#fed'
})

const theme = {
  colors: {
    primary: colors.blue,
    secondary: colors.navy,
    tertiary: colors.red,
    dark: colors.black,
    light: colors.white
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints
}

export default theme
