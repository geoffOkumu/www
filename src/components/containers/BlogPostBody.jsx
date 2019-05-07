import React, { Component } from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Helmet from 'react-helmet'

import Container from '../widgets/Container'
import Heading from '../widgets/Heading'
import Text from '../widgets/Text'
import { media } from '../styles/utils'
import { prismjsTheme } from '../styles/prismjsTheme'

export default class BlogPostBody extends Component {
  render() {
    const { data } = this.props
    const { html, excerpt } = data
    const { title, date, category, featuredImg } = data.frontmatter
    return (
      <Wrapper>
        <Helmet>
          <title>
            {title} - Software development insights by Geoffrey Okumu
          </title>
          <meta name="description" content={excerpt} />
          <meta
            property="og:url"
            content={`https://www.geoffokumu.com/${kebabCase(title)}`}
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={excerpt} />
          <meta
            property="og:image"
            content={`https://www.geoffokumu.com/img/${featuredImg}`}
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Geoffokumu" />
          <meta property="article:published_time" content={date} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@geoffOkumu" />
          <meta name="twitter:creator" content="@geoffOkumu" />
        </Helmet>
        <PrismJSTheme />
        <ArticleHeading>
          <Container customStyles={customStyles.postDetails}>
            <Heading.h1 customStyles={customStyles.heading}>{title}</Heading.h1>
          </Container>
        </ArticleHeading>
        <ArticleDetails>
          <Container customStyles={customStyles.postDetails}>
            <Text.span customStyles={customStyles.text}>{date}</Text.span>
            <Text.span customStyles={customStyles.category}>
              <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
            </Text.span>
          </Container>
        </ArticleDetails>
        <Container customStyles={customStyles.container}>
          <ArticleContainer>
            <Article dangerouslySetInnerHTML={{ __html: html }} />
          </ArticleContainer>
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
  postDetails: css`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  `,
  heading: css`
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    display: block;
    width: 100%;
    text-transform: uppercase;

    ${media.phone`
      font-size: 1.4rem !important;
    `}
  `,
  text: css`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textDark};

    ${media.phone`
      font-size: 1rem !important;
    `}
  `,
  category: css`
    font-size: 1.2rem;
    padding-left: 2rem;
    text-transform: capitalize;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondary};

      &::before {
        content: '# ';
      }

      &:hover {
        text-decoration: underline;
      }
    }

    ${media.phone`
      font-size: 1rem !important;
      padding-left: 1rem;
    `}
  `,
}

const Wrapper = styled.div`
  padding-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
`

const ArticleHeading = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.grey};
`

const ArticleDetails = styled.div`
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  background-color: ${({ theme }) => theme.colors.primary};
`

const ArticleContainer = styled.section`
  width: 100%;
`

//Prism js theme styles
const PrismJSTheme = createGlobalStyle`
  ${prismjsTheme}
`

const Article = styled.article`
  padding-top: 2rem;
  padding-bottom: 4rem;
  font-size: 1.2rem;
  line-height: 1.5;

  ${media.phone`
    font-size: 1rem;
  `}

  &::after {
    content: '...';
    display: block;
    width: 100%;
    text-align: center;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${({ theme }) => theme.font.sans};
  }

  p,
  h1,
  h2,
  h3,
  span {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }

  pre,
  code {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }

  pre {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    overflow-x: auto;
    padding: 1rem;
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
    border-radius: 4px;
    font-weight: 300;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  ${media.tablet`
      max-width: 100%;
      padding-bottom: 1rem;
    `}
`
