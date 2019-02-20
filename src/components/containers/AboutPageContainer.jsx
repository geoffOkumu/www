import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import Container from '../widgets/Container'
import Heading from '../widgets/Heading'
import Text from '../widgets/Text'
import { media } from '../styles/utils'

export default class AboutPageContatainer extends Component {
  render() {
    const { headline, summary, story, cta } = this.props.data
    return (
      <Wrapper>
        <Container customStyles={customStyles.container}>
          <Heading.h1 customStyles={customStyles.heading}>
            {headline}
          </Heading.h1>
          <Text.p customStyles={customStyles.summary}>{summary}</Text.p>
          <Heading.h1 customStyles={customStyles.heading}>My Story</Heading.h1>
          <Text.p customStyles={customStyles.story}>{story}</Text.p>
          <Text.p customStyles={customStyles.cta}>{cta}</Text.p>
        </Container>
      </Wrapper>
    )
  }
}

const customStyles = {
  heading: css`
    font-size: 6rem;
    grid-column: 2/3;
    margin-bottom: 30px !important;
    color: ${({ theme }) => theme.colors.textDark};

    ${media.phone`
      grid-column: 1/3;
      font-size: 4rem;
      margin-bottom: 0 !important;
    `}
  `,
  container: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `,
  summary: css`
    grid-column: 2/3;
    font-style: oblique;
    font-size: 1.6rem;
    line-height: 1.5;

    ${media.phone`
      grid-column: 1/3;
      font-size: 1.4rem;
    `}
  `,
  story: css`
    grid-column: 2/3;
    font-size: 1.2rem;
    line-height: 1.5;

    ${media.phone`
      grid-column: 1/3;
    `}
  `,
  cta: css`
    grid-column: 2/3;
    font-size: 1.2rem;
    line-height: 1.5;

    ${media.phone`
      grid-column: 1/3;
    `}
  `,
}

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.bodyBg};
`
