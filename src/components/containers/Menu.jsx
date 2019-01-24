import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.section`
  font-family: ${props => props.theme.font.sans};
`

const TogglesWrapper = styled.div`
  background-color: ${props => props.theme.colors.grey};
  padding: 1rem;
`

const LinksWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 1rem;
`

class Menu extends React.Component {
  render() {
    return (
      <MenuWrapper>
        <TogglesWrapper>Toggles</TogglesWrapper>
        <LinksWrapper>Links</LinksWrapper>
      </MenuWrapper>
    )
  }
}

export default Menu
