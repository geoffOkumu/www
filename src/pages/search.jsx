import React from 'react'

import Search from '../components/containers/Search'
import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'

const SearchPage = ({ location }) => {
  return (
    <Layout>
      <Header location={location} />
      <Search />
    </Layout>
  )
}

export default SearchPage
