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
  `)
  const products = q.data.allProductsJson.edges;
  const productsGroupedByCollection = {};

  // build individual product pages
  products.forEach((product, i) => {
        product = product.node;

        // group products by collection
        if (product.collection) {
          if (!productsGroupedByCollection[product.collection]) {
            productsGroupedByCollection[product.collection] = [];
          }
          productsGroupedByCollection[product.collection].push(product);
        }

        const previous_product = products[i-1]?.node.url;
        const next_product = products[i+1]?.node.url;
        createPage({
          path: product.url,
          component: require.resolve("./src/components/Product.js"),
          context: {
              product: product,
              previous_product,
              next_product,
          },
        })
  })

  const collectionQ = await graphql(`
    query {
      allCollectionsJson {
        edges {
          node {
            name
            url
            image {
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

  // build collection pages
  collectionQ.data.allCollectionsJson.edges.forEach((collection) => {
    collection = collection.node;
    const products = productsGroupedByCollection[collection.name] || [];

    createPage({
      path: collection.url,
      component: require.resolve("./src/components/collection.js"),
      context: {
          products,
          collection
      },
    })
  });
}
