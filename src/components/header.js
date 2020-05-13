import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import Image from "../components/image"

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
              to="/text"
            >
              text
            </Link>
          </li>
        
        <li>
          <Link
              to="/about"
            >
              about
          </Link>
        </li>
        <li>
          <Link
              to="/image"
            >
              image
          </Link>
        </li>
        <li>
          <Link
              to="/pppp"
            >
              PPPP
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
