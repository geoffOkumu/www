import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Search from '../components/containers/Search'
import Header from '../components/containers/Header'
import Layout from '../components/containers/Layout'

const SearchPage = ({ location, data }) => {
  const posts = data.posts.edges
  const source = location.state.linkedFrom
  return (
    <Layout>
      <Wrapper>
        <Link to={source}>[Back]</Link>
        <Search posts={posts} />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.grey};
  padding-top: 20vh;
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
