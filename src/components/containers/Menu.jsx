import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'

import MenuLink from '../widgets/MenuLink'
import { media } from '../styles/utils'
import { fadeIn } from '../styles/animations'

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

const linksList = ['About', 'Work', 'Contact']

export const DesktopLinks = () => (
  <DesktopLinksWrapper>
    {linksList.map(link => {
      return <MenuLink key={link} title={link} to={'/' + kebabCase(link)} />
    })}
  </DesktopLinksWrapper>
)

export const Menu = () => (
  <MenuWrapper>
    <TogglesWrapper>Toggles</TogglesWrapper>
    <LinksWrapper>
      {linksList.map(link => {
        return <MenuLink key={link} title={link} to={'/' + kebabCase(link)} />
      })}
    </LinksWrapper>
  </MenuWrapper>
)
