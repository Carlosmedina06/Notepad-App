import React from 'react'
import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx'

import { Container, FooterContent, Footerheader } from './FooterStyle.js'

const Footer = () => {
  return (
    <Container>
      <Footerheader>
        <h4>Made with ❤️ by Carlos Medina</h4>
      </Footerheader>
      <FooterContent>
        <a href="https://github.com/carlosmedina06">
          <RxGithubLogo />
        </a>
        <a href="https://www.linkedin.com/in/carlosmedina06/">
          <RxLinkedinLogo />
        </a>
      </FooterContent>
      <FooterContent>
        <p> all rights reserved Carlos Medina® </p>
      </FooterContent>
    </Container>
  )
}

export default Footer
