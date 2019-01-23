import React from 'react'
import styled, { css } from 'styled-components'

import Heading from '../widgets/Heading'
import Text from '../widgets/Text'
import { font } from '../styles/theme'
import { containerStyles } from '../widgets/Container'
import { media } from '../styles/utils'
import { colors } from '../styles/theme'

const Wrapper = styled.section`
  background-color: ${colors.grey};
  padding-top: 200px;
  padding-bottom: 100px;

  ${media.phone`padding-top: 180px;`}
`

const CopyContainer = styled.div`
  ${containerStyles}
`

//custom styles
const custom = {
  heading: css`
    font-size: 3.5rem !important;
    text-align: center;
    margin-bottom: 0.5rem;

    ${media.phone`font-size: 1.8rem !important;`}
  `,
  span: css`
    text-align: center;
    font-family: ${font.display};
    font-style: oblique;
    font-size: 2.4rem;
    display: block;

    ${media.phone`font-size: 1.6rem !important;`}
  `,
}

class Tagline extends React.Component {
  render() {
    return (
      <Wrapper>
        <CopyContainer>
          <Heading.h1 customStyles={custom.heading}>
            Front-end Development Insights
          </Heading.h1>
          <Text.span customStyles={custom.span}>- By geoffOkumu</Text.span>
        </CopyContainer>
      </Wrapper>
    )
  }
}

export default Tagline
