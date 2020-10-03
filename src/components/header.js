import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.overlay}></div>
      <div className={headerStyles.heroContent}>
        <p className={headerStyles.brand}>
          <Link to="/">Ibas Majid</Link>
        </p>
        <p className={headerStyles.description}>
          I teach JavaScript, React, GraphQL and Gatsby
        </p>
      </div>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" activeClassName={headerStyles.activeMenuItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects/" activeClassName={headerStyles.activeMenuItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header