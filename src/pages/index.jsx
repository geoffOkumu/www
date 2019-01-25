import React from 'react'

import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'
import Tagline from '../components/containers/Tagline'

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Tagline />
      <div style={{ height: '200vh' }} />
    </Layout>
  )
}

export default IndexPage
