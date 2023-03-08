import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: 'white',
    color: 'black',
    '-webkit-font-smoothing': 'antialiased',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    minHeight: '100vh',
    fontFamily: '$roboto',
  },

  main: {
    flex: 1,
    padding: 20,
    width: '100%',
    minHeight: '100vh',
    maxWidth: '1200px',
    margin: '0 auto',
  },
})
