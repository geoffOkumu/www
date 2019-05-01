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
            {date} . By {author} . {legnth} min read
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
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
    }

    ${media.phone`
      font-size: 1.6rem !important;
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
  font-weight: 700;
  text-transform: uppercase;
`

const PostDetails = styled.div`
  display: flex;
  align-items: center;

  span {
    display: block;
    color: ${({ theme }) => theme.colors.textDark};
  }
`

const Line = styled.span`
  display: block;
  width: 120px;
  height: 4px;
  background: #000;
  margin-left: -50px;
  margin-right: 1rem;
`

const PostWrapper = styled.article`
  ${containerStyles};
  max-width: 70%;
  margin-bottom: 6rem;

  &:nth-child(1) {
    margin-top: 4rem;
  }

  a {
    color: ${({ theme }) => theme.colors.textDark};
    text-decoration: none;
  }
`
