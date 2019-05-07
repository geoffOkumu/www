import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'
import Container from '../components/widgets/Container'
import BlogPostCard from '../components/containers/BlogPostCard'
import Tagline from '../components/containers/Tagline'
import QuickTips from '../components/containers/QuickTips'

const IndexPage = ({ location, data }) => {
  const posts = data.blogposts.edges

  return (
    <Layout>
      <Header location={location.pathname} />
      <Tagline />
      {/* <QuickTips /> */}
      <Wrapper>
        <Container>
          {posts.map(post => (
            <BlogPostCard
              key={post.node.frontmatter.title}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              category={post.node.frontmatter.category}
              author={post.node.frontmatter.author}
              excerpt={post.node.excerpt}
              legnth={post.node.timeToRead}
            />
          ))}
        </Container>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding-bottom: 4rem;
  padding-top: 4rem;
`

export default IndexPage

export const blogPageQuery = graphql`
  query IndexQuery {
    blogposts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog" } } }
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 220)
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            author
          }
        }
      }
    }
  }
`
