import React from 'react'
import styled, { css } from 'styled-components'

import Input from '../widgets/Input'
import Container from '../widgets/Container'

const customStyles = {
  container: css`
    text-align: start;
    margin-top: 2rem !important;
  `,
  input: css`
    width: 100%;
    font-size: 1.2rem;
    padding: 16px 10px !important;
  `,
}

const Form = styled.form`
  display: block;
`

class Search extends React.Component {
  render() {
    return (
      <Container customStyles={customStyles.container}>
        <Form>
          <Input customStyles={customStyles.input} placeholder="Search..." />
        </Form>
      </Container>
    )
  }
}

export default Search
