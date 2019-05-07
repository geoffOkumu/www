import React from 'react'
import styled, { css } from 'styled-components'

import Heading from '../widgets/Heading'
import Container from '../widgets/Container'
import { media } from '../styles/utils'

class Tagline extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Heading.h1 customStyles={custom.heading}>
            Software Development Insights by Geoff Okumu
          </Heading.h1>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.header`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};

  ${media.phone`
    padding-bottom: 40px;
    padding-top: 40px;
  `}
`

//custom styles
const custom = {
  heading: css`
    font-size: 2rem !important;
    font-family: ${({ theme }) => theme.font.sans};
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textDark};

    ${media.phone`
      font-size: 1.6rem !important;
    `}
  `,
}

export default Tagline
