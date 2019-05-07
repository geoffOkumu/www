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
      <Helmet
        title={`${category.toUpperCase()} - Software Development Insights by Geoffrey Okumu`}
      />
      <Header location={location.pathname} />
      <Wrapper>
        <PageTittle backgroundImg={posts[0].node.frontmatter.featuredImg}>
          <Container>
            <Heading.h1 customStyles={customStyles.heading}>
              # {category}
            </Heading.h1>
          </Container>
        </PageTittle>
        <Container>
          {posts.map(post => (
            <BlogPostCard
              key={post.node.frontmatter.title}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              category={post.node.frontmatter.category}
              author={post.node.frontmatter.author}
              excerpt={post.node.excerpt}
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
  padding-bottom: 4rem;
`

const PageTittle = styled.div`
  padding: 3rem 0;
  margin-bottom: 4rem;
  object-fit: cover;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px 4px #000000;
  background-image: url(${props => props.backgroundImg});
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
          excerpt(pruneLength: 220)
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            author
            featuredImg
          }
        }
      }
    }
  }
`
