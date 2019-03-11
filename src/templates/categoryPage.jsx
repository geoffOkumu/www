import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import Helmet from 'react-helmet'

import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'
import Container from '../components/widgets/Container'
import BlogPostCard from '../components/containers/BlogPostCard'
import Heading from '../components/widgets/Heading'
import { media } from '../components/styles/utils'

const CategoryPage = ({ location, data, pathContext }) => {
  const posts = data.blogposts.edges
  const { category } = pathContext
  return (
    <Layout>
      <Helmet title={`${category.toUpperCase()} - Software Development Insights by Geoffrey Okumu`} />
      <Header location={location} />
      <Wrapper>
        <div style={{ height: 100 }} />
        <Container>
          <PageTittle>
            <Heading.h1 customStyles={customStyles.heading}>
              All Posts in # {category}
            </Heading.h1>
          </PageTittle>
          {posts.map(post => (
            <BlogPostCard
              key={post.node.frontmatter.title}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              category={post.node.frontmatter.category}
            />
          ))}
        </Container>
      </Wrapper>
    </Layout>
  )
}

const customStyles = {
  heading: css`
    display: block;
    font-size: 3.5rem !important;

    ${media.phone`
      font-size: 1.8rem !important;
    `}
  `,
}

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bodyBg};
  padding-bottom: 4rem;
`

const PageTittle = styled.div`
  padding: 2rem 0;
`

export default CategoryPage

export const categoryPageQuery = graphql`
  query CategoryQuery($category: String) {
    blogposts: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
          }
        }
      }
    }
  }
`
