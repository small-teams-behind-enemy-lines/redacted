import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import droids from "../images/404.jpg"
import Metadata from "../components/metadata"

const NotFound = () => {
  return (
    <Layout>
      <Metadata title="404" description="404 [REDACTED]" />
      <h1>404: These aren't the droids you're looking for.</h1>
      <img src={droids} alt="wrong turn at albuquerque"/>
      <p>
        <Link to="/projects/">Have a look at our projects</Link>
      </p>
    </Layout>
  )
}

export default NotFound