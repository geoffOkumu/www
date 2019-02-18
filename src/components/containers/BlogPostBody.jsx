import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Container from '../widgets/Container'
import Heading from '../widgets/Heading'
import Text from '../widgets/Text'

export default class BlogPostBody extends Component {
  render() {
    const { data } = this.props
    const { html } = data
    const { title, date, category } = data.frontmatter
    return (
      <Wrapper>
        <Container customStyles={customStyles.container}>
          <Heading.h1 customStyles={customStyles.heading}>{title}</Heading.h1>
          <ArticleDetails>
            <Text.span customStyles={customStyles.text}>{date}</Text.span>
            <Text.span customStyles={customStyles.category}>
              <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
            </Text.span>
          </ArticleDetails>
          <Article dangerouslySetInnerHTML={{ __html: html }} />
          <PostActions>k</PostActions>
        </Container>
      </Wrapper>
    )
  }
}

const customStyles = {
  container: css`
    display: flex;
    flex-wrap: wrap;
  `,
  heading: css`
    padding-top: 3rem;
    display: block;
    font-size: 3.5rem !important;
  `,
  text: css`
    font-size: 1.6rem;
  `,
  category: css`
    font-size: 1.6rem;
    padding-left: 2rem;
    text-transform: capitalize;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};

      &::before {
        content: '# ';
      }
    }
  `,
}

const PostActions = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  margin-left: 4rem;
  margin-top: 3rem;
  height: 400px;
  width: 30%;
`

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.bodyBg};
  min-height: 100vh;
`

const ArticleDetails = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  width: 100%;
  border-bottom: solid 2px ${({ theme }) => theme.colors.textDark};
`

const Article = styled.article`
  padding-top: 2rem;
  max-width: 60%;
  font-size: 1.2rem;
  line-height: 1.5;
`
