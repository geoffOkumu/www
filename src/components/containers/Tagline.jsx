import React from 'react'
import styled, { css } from 'styled-components'

import Heading from '../widgets/Heading'
import Text from '../widgets/Text'
import { containerStyles } from '../widgets/Container'
import { media } from '../styles/utils'

class Tagline extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading.h1 customStyles={custom.heading}>
          Software Development Insights by Geoff Okumu
        </Heading.h1>
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  ${containerStyles};
  padding-top: 4rem;
  padding-bottom: 4rem;
  max-width: 80%;

  ${media.phone`
    padding-bottom: 40px;
    padding-top: 0;
  `}
`

//custom styles
const custom = {
  heading: css`
    font-size: 3rem !important;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textDark};

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
