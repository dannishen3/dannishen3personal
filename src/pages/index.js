import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/Products"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProductsJson(sort: {order: DESC, fields: ord }, filter: {featured: {eq: true}}) {
        edges {
          node {
            ord
            collection
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
            show_text_field
            paypal_id
            position
            price
            status
            inventory
            url
            xmax_price
            xmin_price
            xvariable_pricing
            images {
              id
              size
              childImageSharp {
                fluid (maxWidth:500){
                  src
                  srcSet
                  aspectRatio
                  sizes
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
      <Products products={data.allProductsJson.edges.map(edge => edge.node)} />
    </Layout>
  )
}

export default IndexPage
