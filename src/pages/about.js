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
        <p>shennü — for the celestial minimalist</p>

        <p>contemporary jewelry // limited edition // material fusion // a wearable-form study of nature & culture // small shop & studio, handmade in New York // 女 AAPI-owned</p>
        
        <p>“among forms”</p>

        <p>IG: @shennu.co</p>
        <br/>
        <p>Return Policy: if faulty/broken - orders can be replaced. Please leave a message via IG</p>
  </Layout>
)

export default About
