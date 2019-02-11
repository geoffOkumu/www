import React from 'react'

import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'

const AboutPage = ({ location }) => {
  return (
    <Layout>
      <Header location={location} />
      <div style={{ height: '200vh' }} />
    </Layout>
  )
}

export default AboutPage
