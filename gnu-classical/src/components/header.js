import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "product_images/nu_classics_round.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <header>
        <div class="wrapper">
          <nav class="header-nav" role="navigation" aria-label="Main">
            <ul>
              <li><Link to="/">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li>
                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                  <input type="hidden" name="cmd" value="_s-xclick"/>
                  <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>
                  <button class="fake-anchor" type="submit" value="checkout" border="0" name="Checkout" alt="PayPal - The safer, easier way to pay online!">Checkout</button>
                  <img class="paypal-pixel" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>
              </li>
                
            </ul>
          </nav>

          {/* <div class="branding">
            <a href="/" title="Home">
              <img class="store-logo" srcset="{{ '/product_images/nu_classics_round.jpg' | constrain: 1168, 200 }}, {{ '/product_images/nu_classics_round.jpg' | constrain: 2136, 400 }} 2x" src="{{ '/product_images/nu_classics_round.jpg' | constrain: 1068, 200 }}" alt="{{ store.name }} Home"/>
            </a>
          </div> */}
          <div class="branding">
            <a href="/" title="Home">
              <img class="store-logo" srcset="{{ '/product_images/nu_classics_round.jpg' | constrain: 1168, 200 }}, {{ '/product_images/nu_classics_round.jpg' | constrain: 2136, 400 }} 2x" src={data.placeholderImage?.childImageSharp.fluid.src} alt="Danni Studio Home"/>
            </a>
          </div>
        </div>
        <nav class="header-nav mobile-nav" aria-label="Mobile Main" role="navigation">
          <ul>
              <li><Link to="/">Products</Link></li>
              <li><Link to="/about">About</Link></li>
            <li>
              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>
                <button class="fake-anchor" type="submit" value="checkout" border="0" name="Checkout" alt="PayPal - The safer, easier way to pay online!">Checkout</button>
                <img class="paypal-pixel" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
              </form>
            </li>
          </ul>
        </nav>
      </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
