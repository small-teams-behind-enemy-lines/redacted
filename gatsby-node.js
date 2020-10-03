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