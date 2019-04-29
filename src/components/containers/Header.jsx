import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { containerStyles } from '../widgets/Container'
import { media } from '../styles/utils'
import Logo from '../../assets/Insights.svg'

const Header = () => (
  <Wrapper>
    <LogoContainer>
      <Link to="/">
        <img src={Logo} alt="geoffokumu insights" />
      </Link>
    </LogoContainer>
  </Wrapper>
)

const LogoContainer = styled.div`
  width: 50%;

  img {
    width: 100%;
    display: block;
  }
`

const Wrapper = styled.header`
  ${containerStyles};
  height: 200px;
  padding-top: 4rem;
  max-width: 1300px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`

export default Header
