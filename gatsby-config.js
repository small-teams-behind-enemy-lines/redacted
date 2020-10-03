/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Are We Cool Yet?",
    description: "... oven aficionado group ...",
    author: "[REDACTED]",
  },
  plugins: [
    "gatsby-plugin-sass",         // scss/sass support
    "gatsby-transformer-remark",  // markdown parser using remark
    "gatsby-transformer-sharp",   // process gatsby-image react component images
    "gatsby-plugin-react-helmet", // manage document head
    // filesystem data source support
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    // imagery support/optimization within markdown
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 550,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    // *** ADD GIT PROJECT REPOS HERE *** //
    {
      resolve: "gatsby-source-git",
      options: {
        name: "glawk_43",
        remote: "https://github.com/small-teams-behind-enemy-lines/glawk_43.git",
        branch: "master"
        // patterns: [`*`, `!*.md`]  // See https://github.com/mrmlnc/fast-glob
      }
    },
    {
      resolve: "gatsby-source-git",
      options: {
        name: "sw_sw9-sw40",
        remote: "https://github.com/small-teams-behind-enemy-lines/sw_sw9-sw40.git",
        branch: "master"
        // patterns: [`*`, `!*.md`]  // See https://github.com/mrmlnc/fast-glob
      }
    }
  ],
}
