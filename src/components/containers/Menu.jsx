import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'

const linksList = ['About', 'Search']

const Menu = () => {
  let location = window !== undefined ? window.location.pathname : '/'

  return (
    <LinksContainer>
      {linksList.map(link => {
        let pathname = kebabCase(link)

        return (
          <li key={link}>
            <Link
              state={{ linkedFrom: location }}
              activeStyle={{ color: '#4484ce' }}
              to={'/' + pathname}
            >
              {link}
            </Link>
          </li>
        )
      })}
      <li key="studio">
        <a href="https://studio.geoffokumu.com">Studio🎨</a>
      </li>
    </LinksContainer>
  )
}

const LinksContainer = styled.ul`
  display: flex;
  list-style: none;
  float: right;

  a {
    color: #000;
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.sans};
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  li {
    margin-left: 1rem;
  }
`

export default Menu
