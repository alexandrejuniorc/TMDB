import React from 'react'
import { FooterContainer, IconsContainer } from './styles'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Link from 'next/link'

export const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer>
        <Link
          href="https://www.linkedin.com/in/alexandrejuniorc/"
          target="_blank"
        >
          <BsLinkedin size={30} />
        </Link>

        <Link href="https://github.com/alexandrejuniorc" target="_blank">
          <BsGithub size={30} />
        </Link>
      </IconsContainer>
    </FooterContainer>
  )
}
