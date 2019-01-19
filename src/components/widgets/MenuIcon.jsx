import React from 'react'
import styled from 'styled-components'

const Hamburger = styled.div`
  width: 50px;
  height: 4px;
  background: ${props => (props.active ? 'transparent' : '#333')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 4px;
    width: 50px;
    background: #333;
    transition: 0.4s;
  }

  &::before {
    top: ${props => (props.active ? '0' : '-16px')};
    transform: ${props => (props.active ? 'rotate(-135deg)' : 'none')};
  }

  &::after {
    top: ${props => (props.active ? '0' : '16px')};
    transform: ${props => (props.active ? 'rotate(-45deg)' : 'none')};
  }
`

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer;
`

const MenuIcon = ({ active }) => (
  <IconWrapper>
    <Hamburger active={active} />
  </IconWrapper>
)

export default MenuIcon
