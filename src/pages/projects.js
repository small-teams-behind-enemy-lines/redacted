import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "!**/*.md"}, frontmatter: {title: {ne: ""}}}, sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                tags
                date(formatString: "DD MMMM, YYYY")
                description
              }
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id}>
              <h2>
                <Link to={`/projects/${edge.node.fields.slug}/`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <div>
                <span>
                  Released {edge.node.frontmatter.date}
                </span>
              </div>
              <p>{edge.node.frontmatter.description}</p>
              <div>
                <Link to={`/projects/${edge.node.fields.slug}/`}>Details</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Projects