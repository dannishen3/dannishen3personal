import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Collections from "../components/Collections"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allCollectionsJson {
        edges {
          node {
            name
            url
            disabled
            image {
              id
              size
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  
  return (
    <Layout
      bodyClass="theme"
      bodyId="home_page"
    >
      <SEO title="Home" />
      <Collections collections={data.allCollectionsJson.edges} />
    </Layout>
  )
}

export default IndexPage
