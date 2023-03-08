import { styled } from '../../../stitches.config'

export const FooterContainer = styled('footer', {
  backgroundColor: '$purple-100',
  padding: '1rem 0',
})

export const IconsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 50,

  a: {
    color: '$white',
    textDecoration: 'none',
    transition: '0.5s ease-in-out',

    '&:hover': {
      color: '$purple-200',
    },
  },
})
