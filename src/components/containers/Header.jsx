import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import CSSPlugin from 'gsap/CSSPlugin'
import TimelineLite from 'gsap/TimelineLite'

import { containerStyles } from '../widgets/Container'
import Logo from '../svg/Logo'
import MenuIcon from '../widgets/MenuIcon'

const HeaderContainer = styled.section`
  ${containerStyles}
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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
    this.menuAnimation
      .to(this.menuElement, 0.2, {
        height: '80vh',
        border: '8px solid #f9cf00',
      })
      .to(this.appBarElement, 0.2, {
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
    return (
      <React.Fragment>
        <header ref={header => (this.menuElement = header)}>
          <HeaderContainer ref={section => (this.appBarElement = section)}>
            <div>
              <Link to="/">
                <Logo width={60} />
              </Link>
            </div>
            <div style={{ position: 'relative' }} onClick={this.handleClick}>
              <MenuIcon active={this.state.menuOpen} />
            </div>
          </HeaderContainer>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
