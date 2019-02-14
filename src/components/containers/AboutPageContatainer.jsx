import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import Container from '../widgets/Container'
import Heading from '../widgets/Heading'
import Text from '../widgets/Text'

export default class AboutPageContatainer extends Component {
  render() {
    const { headline, summary, story, cta } = this.props.data
    return (
      <Wrapper>
        <Container>
          <Heading.h1 customStyles={customStyles.heading}>
            {headline}
          </Heading.h1>
          <Text.p>{summary}</Text.p>
          <Text.p>{story}</Text.p>
          <Text.p>{cta}</Text.p>
        </Container>
      </Wrapper>
    )
  }
}

const customStyles = {
  heading: css`
    font-size: 4rem;
  `,
}

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.bodyBg};
`
