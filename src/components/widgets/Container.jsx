import styled, { css } from 'styled-components'
import propTypes from 'prop-types'

import { media } from '../styles/utils'

export const containerStyles = css`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
`
const Container = styled.div`
  ${containerStyles}
  ${props => props.maxWidth}
  ${props => props.customStyles}
`

Container.propTypes = {
  maxWidth: propTypes.number,
}

Container.defaultProps = {
  maxWidth: 720,
}

export default Container
