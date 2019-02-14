import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'
import AboutPageContatainer from '../components/containers/AboutPageContatainer'

const AboutPage = ({ location, data }) => {
  return (
    <Layout>
      <Header location={location} />
      <AboutPageContatainer data={data.aboutPage.edges[0].node.frontmatter} />
      <div style={{ height: '200vh' }} />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutQuery {
    aboutPage: allMarkdownRemark(
      filter: { frontmatter: { id: { eq: "about-page" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            headline
            summary
            story
            cta
          }
        }
      }
    }
  }
`
