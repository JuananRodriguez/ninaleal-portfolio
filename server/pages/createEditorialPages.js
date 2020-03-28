const Queries = require('../queries');
const path = require(`path`);

module.exports = async ({ graphql, actions }) => {
    const { createPage } = actions
    const postTemplate = path.resolve(`./src/templates/editorialPost.js`);
    const content = await graphql(Queries.getEditorial);

    console.log('content',content)

    if (content.errors) {
        throw content.errors
    }

    const posts = content.data.allMarkdownRemark.edges

    // Create blog posts pages.
    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })
}