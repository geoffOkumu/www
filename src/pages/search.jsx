import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Search from '../components/containers/Search'
import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'

const SearchPage = ({ location, data }) => {
  const posts = data.posts.edges
  return (
    <Layout>
      <Wrapper>
        <div style={{ height: 80 }} />
        <Header location={location} />
        <Search posts={posts} />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bodyBg};
  min-height: 80vh;
  padding-bottom: 4rem;
`

export const categoriesQuery = graphql`
  query CategoriesQuery {
    posts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog" } } }
      limit: 1000
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

export default SearchPage
