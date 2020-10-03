import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/style.css"

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout