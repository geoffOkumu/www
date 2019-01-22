import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'

import normalize from '../styles/normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize}
`

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <Helmet>
          <title>GeoffOkumu</title>
          <html lang="en" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather|Montserrat:700|Playfair+Display:400i"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />
        {children}
      </React.Fragment>
    )
  }
}
export default Layout
