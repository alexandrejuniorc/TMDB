import { styled } from '../../../stitches.config'

export const HeaderContainer = styled('header', {
  backgroundColor: '$purple-100',
  padding: '1rem 0',
})

export const LogoContainer = styled('div', {
  paddingLeft: 112,
})

export const FilterMovieContainer = styled('div', {
  backgroundColor: '$purple-200',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  h1: {
    marginTop: 85,
    color: '$white',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '3rem',
    lineHeight: '3.5rem',
    letterSpacing: '-0.005em',
  },
})

export const OptionsMoviesContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: 25,

  p: {
    marginTop: 40,
    color: '$white',
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
})

export const AllOptionsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  gap: 8,

  width: '55%',
  flexWrap: 'wrap',
  marginTop: 25,
})

export const Option = styled('button', {
  backgroundColor: '$white',
  alignItems: 'center',
  borderRadius: '4px',

  padding: '8px 16px 8px 16px',

  p: {
    margin: 0,
    color: '$black',
    display: 'flex',
    alignItems: 'center',
    gap: 5,

    svg: {
      color: '$white',
    },
  },

  transition: '0.2s ease-in-out',

  '&:hover, &:active': {
    backgroundColor: '$yellow500',
  },
})
