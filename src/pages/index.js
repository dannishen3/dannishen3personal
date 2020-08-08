import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Products from "../components/Products"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProductsJson {
        edges {
          node {
            id
            created_at
            default_price
            description
            name
            on_sale
            options {
              label
              value
            }
            options_label
            options_value
            paypal_id
            position
            price
            status
            url
            tax
            xmax_price
            xmin_price
            xvariable_pricing
            images {
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
  `)
  
  return (
    <Layout bodyAttributes={{
      class: 'theme',
      id: 'home_page'
    }}>
      <SEO title="Home" />
      <Products products={data.allProductsJson.edges} />
    </Layout>
  )
}

export default IndexPage
