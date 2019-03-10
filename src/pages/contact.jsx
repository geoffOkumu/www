import React from 'react'

import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'

const ContactPage = ({ location }) => {
  return (
    <Layout>
      <Header location={location} />
    </Layout>
  )
}

export default ContactPage
