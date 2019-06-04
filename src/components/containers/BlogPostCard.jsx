import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Heading from '../widgets/Heading'
import Text from '../widgets/Text'
import { containerStyles } from '../widgets/Container'
import { media } from '../styles/utils'

export default class BlogPostCard extends React.Component {
  render() {
    const { title, date, category, author, excerpt, legnth } = this.props

    return (
      <PostWrapper>
        <Link to={`/categories/${kebabCase(category)}`}>
          <PostCategory>{category}</PostCategory>
        </Link>
        <Link to={`/${kebabCase(title)}`}>
          <Heading.h2 customStyles={customStyles.heading}>{title}</Heading.h2>
        </Link>
        <PostDetails>
          <Text.span>
            {date} . {legnth} min read
          </Text.span>
        </PostDetails>
        <Text.p>{excerpt}</Text.p>
      </PostWrapper>
    )
  }
}

const customStyles = {
  heading: css`
    display: block;
    text-transform: uppercase;
    font-weight: 800;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: underline;
    }

    ${media.phone`
      font-size: 1.4rem !important;
      `}
  `,
}

const PostCategory = styled.span`
  margin-bottom: 10px;
  text-decoration: none;
  background-color: #000;
  padding: 4px 10px;
  color: #fff;
  font-family: ${({ theme }) => theme.font.sans};
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

const PostDetails = styled.div`
  display: flex;
  align-items: center;

  span {
    display: block;
    color: ${({ theme }) => theme.colors.textDark};
  }
`

const PostWrapper = styled.article`
  ${containerStyles};
  max-width: 70%;
  margin-bottom: 6rem;

  ${media.tablet`
    max-width: 100%;
  `}

  &:nth-child(1) {
    margin-top: 3rem;
  }

  a {
    color: ${({ theme }) => theme.colors.textDark};
    text-decoration: none;
  }
`
