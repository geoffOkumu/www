import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'
import BlogPostBody from '../components/containers/BlogPostBody'

const BlogPostPage = ({ location, data }) => {
  return (
    <Layout>
      <Header location={location} />
      <BlogPostBody data={data.markdownRemark} />
    </Layout>
  )
}

export default BlogPostPage

export const blogTemplateQuery = graphql`
  query blogByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        category
      }
    }
  }
`
