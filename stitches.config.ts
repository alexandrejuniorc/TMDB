import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      'purple-500': 'hsl(252,78%,60%)',
      'purple-100': '#5C16C5',
      'purple-200': '#2D0C5E',

      blue500: 'hsl(206,100%,50%)',
      green500: 'hsl(148,60%,60%)',
      red500: 'hsl(352,100%,62%)',

      gray500: 'hsl(206,10%,76%)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {
      poppins: 'Poppins',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },

  utils: {
    // Abbreviated margin properties
    m: (value: number) => ({
      margin: value,
    }),
    mt: (value: number) => ({
      marginTop: value,
    }),
    mr: (value: number) => ({
      marginRight: value,
    }),
    mb: (value: number) => ({
      marginBottom: value,
    }),
    ml: (value: number) => ({
      marginLeft: value,
    }),
    mx: (value: number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: number) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: number) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: number) => ({
      borderRadius: value,
    }),
  },
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    hiContrast: 'hsl(206,2%,93%)',
    loContrast: 'hsl(206,8%,8%)',

    gray100: 'hsl(206,8%,12%)',
    gray200: 'hsl(206,7%,14%)',
    gray300: 'hsl(206,7%,15%)',
    gray400: 'hsl(206,7%,24%)',
    gray500: 'hsl(206,7%,30%)',
    gray600: 'hsl(206,5%,53%)',
  },
  space: {},
  fonts: {},
})

export const lightTheme = createTheme('light-theme', {
  colors: {
    hiContrast: 'hsl(206,2%,93%)',
    loContrast: 'hsl(206,8%,8%)',

    gray100: 'hsl(206,8%,12%)',
    gray200: 'hsl(206,7%,14%)',
    gray300: 'hsl(206,7%,15%)',
    gray400: 'hsl(206,7%,24%)',
    gray500: 'hsl(206,7%,30%)',
    gray600: 'hsl(206,5%,53%)',
  },
  space: {},
  fonts: {},
})
