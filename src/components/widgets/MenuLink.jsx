import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const LinkWrapper = styled.div`
  padding: 1rem 0;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-left: 2rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`
const MenuLink = ({ title, to }) => {
  return (
    <LinkWrapper>
      <Link to={to}>{title}</Link>
    </LinkWrapper>
  )
}

MenuLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default MenuLink
