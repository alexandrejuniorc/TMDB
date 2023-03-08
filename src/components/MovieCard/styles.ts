import { styled } from '../../../stitches.config'

export const MovieCardContainer = styled('div', {
  cursor: 'pointer',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: 4,

  marginBottom: '3rem',

  justifyContent: 'space-between',

  img: {
    objectFit: 'cover',
  },

  h3: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    color: '$black',
    textAlign: 'center',
    padding: '10px 0',
  },

  p: {
    fontWeight: '700',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    color: '#646464',
    textAlign: 'center',
  },

  transition: '0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$purple-500',

    h3: {
      color: '$white',
    },

    p: {
      color: '$black',
    },
  },
})
