import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="About AWCY?" />
      <h1>About Page</h1>
      <p>AWCY oven aficionados.</p>
    </Layout>
  )
}

export default About