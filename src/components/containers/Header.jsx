import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { containerStyles } from '../widgets/Container'
import { media } from '../styles/utils'
import LogoMobile from '../../assets/logo-mobile.svg'
import Logo from '../../assets/Insights.svg'
import External from '../svg/external'

const Header = ({ location }) => (
  <Wrapper>
    <LogoContainer>
      <Link to="/">
        <img src={Logo} alt="geoffokumu insights" />
        <LogoResponsive src={LogoMobile} alt="geoffokumu" />
      </Link>
    </LogoContainer>
    <Menu>
      <MenuLink>
        <Link
          activeStyle={{ color: '#4e1fe8' }}
          state={{ source: location }}
          to="/search"
        >
          SEARCH
        </Link>
      </MenuLink>
      <MenuLink>
        <a href="https://www.geoffokumu.com">
          STUDIO
          <External />{' '}
        </a>
      </MenuLink>
    </Menu>
  </Wrapper>
)

const Menu = styled.ul`
  display: flex;
  list-style: none;
`

const MenuLink = styled.li`
  margin-left: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textDark};
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.sans};
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`

const LogoContainer = styled.figure`
  display: block;
  margin: 0;

  img {
    height: 45px;

    ${media.tablet`
      display: none;
    `}
  }
`

const LogoResponsive = styled.img`
  height: 45px;
  display: none;

  ${media.tablet`
      display: block !important;
    `}
`

const Wrapper = styled.nav`
  ${containerStyles};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`

export default Header
