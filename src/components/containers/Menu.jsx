import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'

import MenuLink from '../widgets/MenuLink'
import { media } from '../styles/utils'
import { fadeIn } from '../styles/animations'

const linksList = ['About', 'Work', 'Contact']

const active = (h, location) => new RegExp('/\\b(' + h + ')\\b').test(location)

const Links = ({ location }) => (
  <React.Fragment>
    {linksList.map(link => {
      let pathname = kebabCase(link)

      return (
        <MenuLink
          active={active(pathname, location)}
          key={link}
          title={link}
          to={'/' + pathname}
        />
      )
    })}
  </React.Fragment>
)

export const DesktopLinks = ({ location }) => (
  <DesktopLinksWrapper>
    <Links location={location} />
  </DesktopLinksWrapper>
)

export const Menu = ({ location }) => (
  <MenuWrapper>
    <TogglesWrapper>Toggles</TogglesWrapper>
    <LinksWrapper>
      <Links location={location} />
    </LinksWrapper>
  </MenuWrapper>
)

const MenuWrapper = styled.section`
  font-family: ${({ theme }) => theme.font.sans};
  animation: ${fadeIn} 1s;
`

const TogglesWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 1rem;
`

const LinksWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  text-align: left;
  margin-left: 50%;

  ${media.tablet`text-align: right`}
`

const DesktopLinksWrapper = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.font.sans};

  ${media.tablet`display: none;`};
`
