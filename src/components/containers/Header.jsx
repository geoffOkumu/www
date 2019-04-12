import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import CSSPlugin from 'gsap/CSSPlugin'
import TimelineLite from 'gsap/TimelineLite'

import { containerStyles } from '../widgets/Container'
import MenuIcon from '../widgets/MenuIcon'
import { colors } from '../styles/theme'
import { media } from '../styles/utils'
import { DesktopLinks, Menu } from './Menu'

//Prevent CSSPlugin from being removed by tree shaking
const used = [CSSPlugin]

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
    this.menuElement = null
    this.appBarElement = null
    this.menuAnimation = new TimelineLite({ paused: true })
  }

  handleClick = () => this.setState({ menuOpen: !this.state.menuOpen })

  componentDidMount() {
    this.menuAnimation.to(this.menuElement, 0.2, {
      height: '400px',
      borderBottom: `8px solid ${colors.secondary}`,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.menuOpen !== this.state.menuOpen) {
      if (this.state.menuOpen === true) {
        this.menuAnimation.play()
      } else {
        this.menuAnimation.reverse()
      }
    }
  }

  render() {
    const { location } = this.props

    return (
      <React.Fragment>
        <Wrapper ref={header => (this.menuElement = header)}>
          <HeaderContainer ref={section => (this.appBarElement = section)}>
            <div>
              <Link to="/">
                <HeaderLogo>GEOFFOKUMU</HeaderLogo>
              </Link>
            </div>
            <div>
              <DesktopLinks location={location.pathname} />
              <MenuButton onClick={this.handleClick}>
                <MenuIcon active={this.state.menuOpen} />
              </MenuButton>
            </div>
          </HeaderContainer>
          {this.state.menuOpen && <Menu location={location.pathname} />}
        </Wrapper>
      </React.Fragment>
    )
  }
}

const HeaderLogo = styled.h1`
  font-size: 1.4rem;
  line-height: 1;
  font-family: ${({ theme }) => theme.font.sans};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`

const HeaderContainer = styled.section`
  ${containerStyles}
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};

  a {
    text-decoration: none;
  }
`

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  height: 60px;
`

const MenuButton = styled.div`
  position: relative;
  display: none;

  ${media.tablet`display: block;`}
`

export default Header
