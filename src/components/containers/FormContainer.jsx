import React, { Component } from 'react'
import styled from 'styled-components'

import Input from '../widgets/Input'
import { media } from '../styles/utils'
import { containerStyles } from '../widgets/Container'

export default class FormContainer extends Component {
  state = {
    email: '',
    name: '',
    error: false,
  }

  handleSubmit = e => {
    e.preventDefault()

    const { email, name, error } = this.state

    if (email === '' || name === '') this.setState({ error: true })

    if (error) console.log('error')
  }

  render() {
    const { email, name, error } = this.state

    return (
      <Wrapper>
        <Form>
          <label>Get weekly updates</label>
          <Input
            onChange={e => this.setState({ email: e.target.value })}
            value={email}
            isValid={!error}
            type="email"
            placeholder="Enter your email"
          />
          <Input
            onChange={e => this.setState({ name: e.target.value })}
            value={name}
            isValid={!error}
            type="text"
            placeholder="Name"
          />
          <Input onClick={this.handleSubmit} type="submit" />
        </Form>
        <Line />
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  ${containerStyles};
  max-width: 70%;

  ${media.tablet`
    max-width: 100%;
  `}
`

const Line = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textLight};
`

const Form = styled.form`
  display: block;

  label {
    display: block;
    font-family: ${({ theme }) => theme.font.sans};
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  input {
    display: block !important;
    margin-bottom: 1rem;
  }
`
