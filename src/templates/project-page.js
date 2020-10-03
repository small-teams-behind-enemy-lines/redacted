import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import projectStyles from "./projectPage.module.scss"

export const query = graphql`
  query ($slug:String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        build_level
        tags
        featured_image {
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
const ProjectPage = props => {
  return (
    <Layout>
      <div className={projectStyles.content}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <span className={projectStyles.meta}>
          Released {props.data.markdownRemark.frontmatter.date}
        </span>
        {
          props.data.markdownRemark.frontmatter.featured_image && (
            <Img
              className={projectStyles.featured_image}
              fluid={props.data.markdownRemark.frontmatter.featured_image.childImageSharp.fluid}
              alt={props.data.markdownRemark.frontmatter.title}
            />
          )
        }
        <div 
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        >
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage