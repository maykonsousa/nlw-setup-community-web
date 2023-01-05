import React from 'react'
import { HeaderContainer, Logo } from './header.styles'
import LogoImg from '../../assets/brand.svg'

const Header = () => {
    console.log(LogoImg)
  return (
      <HeaderContainer>
          <Logo src={LogoImg.src} />
          
    </HeaderContainer>
  )
}

export default Header