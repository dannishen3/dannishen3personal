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
            Catalog
          </Link>
        </li>
        
          <li>
            <Link
              to="/about"
            >
              About
            </Link>
          </li>
        
        <li>
          <Link
              to="/contact"
            >
              Contact
          </Link>
        </li>
        <li>
          <Link
              to="/cart"
            >
              Cart
          </Link>
        </li>
      </ul>
    </nav>
    <div className="branding">
          <a href="/" title="Home">
              <img className="store-logo" src="banner_oid3.png" alt="Danni Shen"/>
          </a>
    </div>
  </header>
)

/*<header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>*/

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
