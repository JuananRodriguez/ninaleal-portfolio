const getCollections = `
{
    allMarkdownRemark(
        sort: {
            order: ASC, 
            fields: [frontmatter___date]}, 
            filter: {
                fileAbsolutePath: {regex: "/collections/"
            }
        }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const getPosts = `
{
    allMarkdownRemark(
        sort: {
            order: ASC, 
            fields: [frontmatter___date]}, 
            filter: {
                fileAbsolutePath: {regex: "/blog/"
            }
        }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`
const getEditorial = `
{
    allMarkdownRemark(
        sort: {
            order: ASC, 
            fields: [frontmatter___date]}, 
            filter: {
                fileAbsolutePath: {regex: "/editorial/"
            }
        }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`

exports.getCollections = getCollections;
exports.getEditorial = getEditorial;
exports.getPosts = getPosts;