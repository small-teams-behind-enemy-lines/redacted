import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import projectsStyles from "./projects.module.scss"
import Metadata from "../components/metadata"

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "!**/*.md"}, frontmatter: {title: {ne: ""}}}, sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                description
                featured_image {
                  childImageSharp {
                    fluid(maxWidth: 350) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
      <Metadata title="Projects" description="AWCY? Projects" />
      <ul className={projectsStyles.projects}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={projectsStyles.project} key={edge.node.id}>
              <h2>
                <Link to={`/projects/${edge.node.fields.slug}/`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <div className={projectsStyles.meta}>
                <span>
                  Released {edge.node.frontmatter.date}
                </span>
              </div>
              {
                edge.node.frontmatter.featured_image && (
                  <Img
                  className={projectsStyles.featured_image}
                    fluid={edge.node.frontmatter.featured_image.childImageSharp.fluid}
                    alt={edge.node.frontmatter.title}
                  />
                )
              }
              <p className={projectsStyles.description}>{edge.node.frontmatter.description}</p>
              <div className={projectsStyles.button}>
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