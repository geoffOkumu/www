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
              category
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

    // Tag pages:
    let categories = []
    // Iterate through each post, putting all found tags into `categories`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.category`)) {
        categories = categories.concat(edge.node.frontmatter.category)
      }
    })
    // Eliminate duplicate tags
    categories = _.uniq(categories)

    // Make tag pages
    categories.forEach(category => {
      const categoryPath = `/categories/${_.kebabCase(category)}`

      createPage({
        path: categoryPath,
        component: path.resolve(`src/templates/categoryPage.jsx`),
        context: {
          category,
        },
      })
    })
  })
}
