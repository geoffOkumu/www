import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Heading from '../widgets/Heading'
import Text from '../widgets/Text'
import { media } from '../styles/utils'

export default class BlogPostCard extends React.Component {
  render() {
    const { title, date, category } = this.props
    return (
      <PostWrapper>
        <Link to={`/${kebabCase(title)}`}>
          <Heading.h2 customStyles={customStyles.heading}>{title}</Heading.h2>
        </Link>
        <PostDetails>
          <Text.span>{category}</Text.span>
          <Text.span>{date}</Text.span>
        </PostDetails>
      </PostWrapper>
    )
  }
}

const customStyles = {
  heading: css`
    display: block;
    font-size: 3.5rem !important;
    padding: 0 4rem;

    ${media.phone`
      font-size: 1.6rem !important;
      padding: 0 1rem;
      `}
  `,
}

const PostDetails = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: solid 1px
    ${({ theme, isDark }) =>
      isDark ? theme.colors.grey : theme.colors.textDark};

  span {
    margin-right: 1rem;
    padding: 0.6rem 0;

    &:nth-child(1) {
      padding-left: 1rem;
      text-transform: capitalize;
    }
  }
`

PostDetails.defaultProps = {
  isDark: false,
}

const PostWrapper = styled.article`
  margin-bottom: 2rem;
  background-color: ${props => props.background};
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;

  a {
    color: ${({ theme }) => theme.colors.textDark};
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  ${media.phone`height: 300px;`}
`

PostWrapper.defaultProps = {
  background: '#C5E3D7',
}
