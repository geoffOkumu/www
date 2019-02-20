import React from 'react'
import styled, { css } from 'styled-components'

import Heading from '../widgets/Heading'
import Text from '../widgets/Text'
import Container from '../widgets/Container'
import { media } from '../styles/utils'

class Tagline extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Heading.h1 customStyles={custom.heading}>
            Software Development Insights
          </Heading.h1>
          <Text.span customStyles={custom.span}>By geoffOkumu</Text.span>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  padding-top: 1rem;
  padding-bottom: 80px;

  ${media.phone`
    padding-bottom: 60px;
  `}
`

//custom styles
const custom = {
  heading: css`
    font-size: 3.5rem !important;
    margin-bottom: 1rem;

    ${media.phone`
      font-size: 1.6rem !important;
    `}
  `,
  span: css`
    font-family: ${({ theme }) => theme.font.display};
    font-style: oblique;
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    width: 100%;

    &::before,
    &::after {
      content: '';
      background: ${({ theme }) => theme.colors.secondary};
      border-width: 0.5em 0;
      height: 0.1em;
      margin: 0.2em;
      margin-top: 0.4em;
    }

    &::before {
      flex: 1;
    }

    &::after {
      flex: 5;
    }

    ${media.phone`font-size: 1.2rem !important;`}
  `,
}

export default Tagline
