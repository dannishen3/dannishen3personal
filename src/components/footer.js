import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "../components/image"

const Footer = ({ siteTitle }) => (
    <footer>
    <div class="wrapper">
        <nav class="footer-nav" id="footer">
          <ul class="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link title="View About" to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            
          </ul>
          
            <ul class="social-links">
                <li><a title="Instagram" href="https://www.instagram.com/_oid.studio/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 90 612 612"><path d="M540.273 90H71.727C32.19 90 0 122.19 0 161.727v468.67C0 669.81 32.19 702 71.727 702h468.67c39.535 0 71.726-32.19 71.726-71.727V161.727C612 122.313 579.687 90 540.273 90zM306 280.332c63.893 0 115.668 51.775 115.668 115.668S369.893 511.668 306 511.668 190.332 459.893 190.332 396 242.107 280.332 306 280.332zM542.232 608.12c0 13.096-10.77 23.867-23.868 23.867H92.412c-13.097 0-23.868-10.77-23.868-23.868V348.51h56.304c-3.917 15.177-6.12 31.21-6.12 47.49 0 103.55 83.966 187.272 187.272 187.272S493.272 499.552 493.272 396c0-16.524-2.204-32.313-6.12-47.49h55.08v259.61zm0-353.002c0 13.097-10.77 23.868-23.868 23.868h-69.77c-13.096 0-23.867-10.77-23.867-23.868V185.35c0-13.097 10.77-23.868 23.868-23.868h69.77c13.096 0 23.867 10.77 23.867 23.868v69.768z"></path></svg></a></li>
            </ul>
        </nav>
      </div>
  </footer>
)


Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
