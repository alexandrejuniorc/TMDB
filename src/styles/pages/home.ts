import { styled } from '../../../stitches.config'

export const MoviesContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',

  columnGap: 15,
})
