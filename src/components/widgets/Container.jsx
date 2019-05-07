import styled, { css } from 'styled-components'
import propTypes from 'prop-types'

import { media } from '../styles/utils'

export const containerStyles = css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: auto;
  margin-right: auto;
`
const Container = styled.div`
  ${containerStyles}
  max-width: ${props => props.maxWidth}px;

  ${props => props.customStyles}
`

Container.propTypes = {
  maxWidth: propTypes.number,
}

Container.defaultProps = {
  maxWidth: 1344,
}

export default Container
