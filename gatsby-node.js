const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    // if (node.internal.type === 'MarkdownRemark') {
    //     const parsedFilePath = path.basename(node.fileAbsolutePath, '.md');
    //     const slug = parsedFilePath
        
    //     createNodeField({
    //         node,
    //         name: 'slug',
    //         value: slug
    //     })
    // }


    if (node.internal.type === `MarkdownRemark`) {
        const parsedFilePath = path.basename(node.fileAbsolutePath, '.md');
        const slug = parsedFilePath
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
      }
    //   else if (
    //     node.internal.type === `MarkdownRemark` && typeof node.slug === "undefined"
    //   ) {
    //     const fileNode = getNode(node.parent);
    //     createNodeField({
    //       node,
    //       name: `slug`,
    //       value: fileNode.fields.slug,
    //     });
    //   }

}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                            permalink
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${(edge.node.fields.slug).split("---")[1]}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}