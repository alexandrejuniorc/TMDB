import { ReactNode } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { Button } from './styles'

interface CustomButton {
  children: ReactNode
}

export const CustomButton = ({ children, ...props }: CustomButton) => {
  return (
    <Button rightIcon={<HighlightOffIcon />} {...props}>
      {children}
    </Button>
  )
}
