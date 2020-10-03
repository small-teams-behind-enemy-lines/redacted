const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
        const parent = getNode(node.parent);
        const srcname = parent.sourceInstanceName;
        const basename = path.basename(node.fileAbsolutePath, ".md")
        
        let collection = srcname;
        let slug = "";

        if (srcname == 'content') {
            slug = basename;
        } else {
            if (basename == '_config') {
                slug = srcname;
            } else {
                slug = srcname + '-' + basename;
            }
        }
        
        createNodeField({
            node,
            name: 'collection',
            value: collection,
        });

        createNodeField({
            node,
            name: "slug",
            value: slug,
        });
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const response = await graphql(`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "!**/*.md"}, frontmatter: {title: {ne: ""}}}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    response.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `/projects/${edge.node.fields.slug}`,
        component: path.resolve("./src/templates/project-page.js"),
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
  }