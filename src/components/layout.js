import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons';


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <a href="https://twitter.com/Gon387?s=09">
          <FontAwesomeIcon
            color="#3eaded"
            size="3x"
            icon={faTwitterSquare} />
        </a>   
        <p>&copy; {new Date().getFullYear()} Delog &bull; Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://w3layouts.com">W3Layouts</a></p>
      </footer>
    </div>
  )
}
