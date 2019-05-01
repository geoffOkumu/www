import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { containerStyles } from '../widgets/Container'
import { media } from '../styles/utils'
import Logo from '../../assets/Insights.svg'
import Menu from './Menu'

const Header = () => (
  <Wrapper>
    <LogoContainer>
      <Link to="/">
        <img src={Logo} alt="geoffokumu insights" />
      </Link>
    </LogoContainer>
    <Menu />
  </Wrapper>
)

const LogoContainer = styled.div`
  width: 50%;
  float: left;

  img {
    width: 100%;
    display: block;
    margin-bottom: 2rem;
  }
`

const Wrapper = styled.header`
  ${containerStyles};
  padding-top: 2rem;
  height: 120px;
  max-width: 1300px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`

export default Header
