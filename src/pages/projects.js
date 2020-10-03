import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "!**/*.md"}}, sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                tags
                date(formatString: "DD MMMM, YYYY")
                description
              }
              id
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
              <h2>{edge.node.frontmatter.title}</h2>
              <div>
                <span>
                  Released {edge.node.frontmatter.date}
                </span>
              </div>
              <p>{edge.node.frontmatter.description}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Projects