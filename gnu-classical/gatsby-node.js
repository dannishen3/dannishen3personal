/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fs = require("fs")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const q = await graphql(`
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
  `)
  const products = q.data.allProductsJson.edges;
  products.forEach(product => {
        product = product.node;
        createPage({
        path: product.url,
        component: require.resolve("./src/components/Product.js"),
        context: {
            // pageContent: product.content,
            // links: product.links,
            product: product
        },
        })
  })
}
