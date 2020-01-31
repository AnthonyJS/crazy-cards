import deviceWidths from 'constants/deviceWidths'

const breakpoints = [
  '0',
  `${deviceWidths[1]}`,
  `${deviceWidths[2]}`,
  `${deviceWidths[3]}`
]

breakpoints.s = breakpoints[0]
breakpoints.m = breakpoints[1]
breakpoints.l = breakpoints[2]
breakpoints.xl = breakpoints[3]

const theme = {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints
}

export default theme
