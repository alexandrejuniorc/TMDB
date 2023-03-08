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
    minHeight: '100vh',
  },

  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 20,
  },

  main: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
  },
})
