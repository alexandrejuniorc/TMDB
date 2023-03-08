import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/logo.svg'
import { HeaderContainer, LogoContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src={Logo} alt="Logo TMDB" />
      </LogoContainer>
    </HeaderContainer>
  )
}
