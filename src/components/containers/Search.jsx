import React from 'react'
import styled, { css } from 'styled-components'
import uniq from 'lodash/uniq'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'
import Fuse from 'fuse.js'

import Input from '../widgets/Input'
import Container from '../widgets/Container'
import Heading from '../widgets/Heading'
import Text from '../widgets/Text'
import { media } from '../styles/utils'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchtext: '',
      searchReasults: [],
    }

    //Init fuse.js
    let options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 10,
      keys: ['title', 'category'],
    }

    let list = this.props.posts.map(post => post.node.frontmatter)

    this.fuseSearch = new Fuse(list, options)
  }

  onSubmit = e => {
    e.preventDefault()

    let { searchtext } = this.state

    let results = this.fuseSearch.search(searchtext)

    this.setState({ searchReasults: results })
  }

  handleInputChange = e => {
    this.setState({ searchtext: e.target.value })

    let { searchtext } = this.state

    let results = this.fuseSearch.search(searchtext)

    this.setState({ searchReasults: results })
  }

  render() {
    const { searchtext, searchReasults } = this.state
    const { posts } = this.props

    const categories = uniq(posts.map(post => post.node.frontmatter.category))

    return (
      <Container customStyles={customStyles.container}>
        <Form>
          <Input
            value={searchtext}
            onChange={this.handleInputChange}
            customStyles={customStyles.input}
            placeholder="Search..."
          />
        </Form>
        <section>
          {searchReasults.map(result => (
            <SearchReasultItem key={result.title}>
              <Link to={`/${kebabCase(result.title)}`}>
                <Heading.h2>{result.title}</Heading.h2>
                <Text.span>{result.category}</Text.span>
              </Link>
            </SearchReasultItem>
          ))}
        </section>
        <CategoriesWrapper>
          <Heading.h3>Categories</Heading.h3>
          {categories.map(category => (
            <Link to={`/categories/${kebabCase(category)}`} key={category}>
              {category}
            </Link>
          ))}
        </CategoriesWrapper>
      </Container>
    )
  }
}

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

const CategoriesWrapper = styled.section`
  padding-top: 2rem;
  text-align: center;
  text-transform: capitalize !important;

  a {
    padding: 0 1rem;

    &::before {
      content: '# ';
    }
  }
`

const SearchReasultItem = styled.div`
  display: block;
  width: 100%;
  padding-top: 0.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textDark};

    &:hover h2 {
      text-decoration: underline;
    }
  }

  h2 {
    margin-bottom: 4px;

    ${media.phone`
      font-size: 1.6rem;
    `}
  }

  span {
    text-transform: capitalize;

    &::before {
      content: '# ';
    }
  }
`

export default Search
