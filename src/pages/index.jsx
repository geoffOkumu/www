import React from 'react'
import styled, { css } from 'styled-components'

import Heading from '../components/widgets/Heading'
import Layout from '../components/containers/Layout'

const Container = styled.div`
  padding: 0 1rem;
`

const customHeading = css`
  font-size: 4rem;
`

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Heading.h1 custom={customHeading}>Home page</Heading.h1>
      </Container>
    </Layout>
  )
}

export default IndexPage
