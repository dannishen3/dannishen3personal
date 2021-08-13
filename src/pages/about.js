import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const About = () => (
  <Layout
    bodyClass="theme"
    bodyId="contact_page"
  >
      <Helmet>
          <style>{`
              #___gatsby {
                display: flex;
                flex-direction: column;
                height: 100%;
              }
              #gatsby-focus-wrapper {
                display: flex;
                flex-direction: column;
                height: 100%;
              }
          `}</style>
      </Helmet>
      <SEO title="About" />
        <p>6.persimmons — celestial objects</p>

        <p>minimalist jewelry // one of a kind // material fusion // a wearable-form study of nature & culture // small shop & studio, handmade in New York // 女 AAPI-owned</p>
        
        <p>“among forms”</p>

        <p>IG: @6.persimmons</p>
        <br/>
        <p>Return Policy: if faulty/broken - orders can be replaced. Please leave a message via IG</p>
  </Layout>
)

export default About
