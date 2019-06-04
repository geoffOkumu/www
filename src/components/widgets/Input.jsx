import styled from 'styled-components'

const Input = styled.input`
  appearance: none;
  min-height: 36px;
  padding: 12px 2rem;
  box-sizing: border-box;
  line-height: inherit;
  font-family: inherit;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.textLight};
  transition: ${({ theme }) => theme.transition} box-shadow;

  ::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  ::-ms-clear {
    display: none;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue};
  }

  &[type='textarea'] {
    resize: vertical;
  }

  &[type='submit'] {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.font.sans};
    padding: 12px 2rem;
    text-align: center;
    border: none;
    text-decoration: none;
    display: inline-block;
    outline: none;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #000;
    }
  }

  ${props => props.customStyles}
`

export default Input
