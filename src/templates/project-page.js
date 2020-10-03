import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query ($slug:String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        build_level
        tags
      }
      html
    }
  }
`

const ProjectPage = props => {
  return (
    <Layout>
      <div>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <span>
          Released {props.data.markdownRemark.frontmatter.date}
        </span>
        <div 
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        >
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage