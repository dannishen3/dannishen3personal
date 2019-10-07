import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="header-nav">
      <ul>
        <li className="selected">
          <Link
            to="/"
          >
            curatorial
          </Link>
        </li>
        
          <li>
            <Link
              to="/about"
            >
              text
            </Link>
          </li>
        
        <li>
          <Link
              to="/bio_cv"
            >
              bio_cv
          </Link>
        </li>
        <li>
          <Link
              to="/image"
            >
              image
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
