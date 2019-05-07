import React from 'react'
import { Link } from 'gatsby'
import { css } from 'styled-components'

import Layout from '../components/containers/Layout'
import Header from '../components/containers/Header'
import Container from '../components/widgets/Container'
import Heading from '../components/widgets/Heading'

const ErrorPage = ({ location }) => {
  return (
    <Layout>
      <Header location={location.pathname} />
      <Container customStyles={customStyles.container}>
        <Heading.h1 customStyles={customStyles.heading}>
          Page not Found
        </Heading.h1>
      </Container>
    </Layout>
  )
}

const customStyles = {
  container: css`
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `,
  heading: css`
    display: block;
  `,
}

export default ErrorPage
