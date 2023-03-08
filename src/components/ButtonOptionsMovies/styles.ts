import { Button as ChakraButton } from '@chakra-ui/react'
import { styled } from '../../../stitches.config'

export const Button = styled(ChakraButton, {
  backgroundColor: 'blue.500',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '9999px',
  transition: 'all 0.2s',
  '&:hover': {
    backgroundColor: 'blue.600',
  },
})
