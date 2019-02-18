const _ = require('lodash')
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "blog" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              id
              title
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id

      if (edge.node.frontmatter.templateKey === 'blog') {
        createPage({
          path: _.kebabCase(edge.node.frontmatter.title),
          component: path.resolve(`src/templates/blogPostPage.jsx`),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      }
    })
  })
}
