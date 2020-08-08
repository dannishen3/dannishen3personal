import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const About = () => (
  <Layout bodyAttributes={{
    class: 'theme',
    id: 'contact_page'
  }}>
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
        <p>nü-classics: re-defining classicality</p>

        <p>lightweight, slow-made contemporary jewelry inspired by organic minimalism: a wearable-form study of nature & culture // limited edition // super small shop & studio, handmade in New York // 女 AAPI-owned</p>
        
        <p>“among forms”</p>

        <p>“IG: @nu.classics”</p>
  </Layout>
)

export default About
