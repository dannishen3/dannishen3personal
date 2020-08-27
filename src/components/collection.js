import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/Products"

const CollectionPage = ({pageContext}) => {
  const { products, collection } = pageContext;
  
  return (
    <Layout
      bodyClass="theme"
      bodyId="home_page"
    >
      <SEO title={collection.name} />
      <Products products={products} />
    </Layout>
  )
}

export default CollectionPage
