import React from 'react'
import styled from 'styled-components'

import Container from '../widgets/Container'
import Text from '../widgets/Text'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Text.span>&copy; Copyright 2019 . Geoff Okumu</Text.span>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.textBlack};
  background-color: ${({ theme }) => theme.colors.bodyBg};
  padding: 1rem 0;
`

export default Footer
