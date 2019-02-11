import React from 'react'
import styled, { css } from 'styled-components'

import Heading from '../widgets/Heading'
import Text from '../widgets/Text'
import { media } from '../styles/utils'

class BlogPostCard extends React.Component {
  render() {
    const { title, excerpt, date, category, author, image } = this.props
    return (
      <PostWrapper>
        <Heading.h2 customStyles={customStyles.heading}>{title}</Heading.h2>
        <PostDetails>
          <Text.span>{category}</Text.span>
          <Text.span>{author}</Text.span>
          <Text.span>{date}</Text.span>
        </PostDetails>
      </PostWrapper>
    )
  }
}

const customStyles = {
  img: css`
    height: 240px;
    width: auto;
    object-fit: cover;

    ${media.tablet`
      width: 100%;
      height: auto;
    `}
  `,
  excerpt: css`
    max-width: 90%;
  `,
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

  ${media.phone`height: 400px;`}
`

PostWrapper.defaultProps = {
  background: '#C5E3D7',
}

export default BlogPostCard
