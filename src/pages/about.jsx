import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'
import AboutPageContatainer from '../components/containers/AboutPageContainer'

const AboutPage = ({ location, data }) => {
  return (
    <Layout>
      <Helmet title="About me - Software Development Insights by Geoffrey Okumu" />
      <Header location={location} />
      <AboutPageContatainer data={data.aboutPage.edges[0].node.frontmatter} />
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
            cta
          }
        }
      }
    }
  }
`
