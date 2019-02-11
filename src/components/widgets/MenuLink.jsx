import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const LinkWrapper = styled.div`
  padding: 1rem 0;
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 1;
  margin-left: 2rem;

  a {
    text-decoration: none;
    color: ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.black};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`
const MenuLink = ({ title, to, active }) => {
  return (
    <LinkWrapper active={active}>
      <Link to={to}>{title}</Link>
    </LinkWrapper>
  )
}

MenuLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
}

export default MenuLink
