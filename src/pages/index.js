import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CatalogItem from '../components/catalogitem'
import {catalog_list} from '../catalog';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <div class="product-list">
            {catalog_list.map(item => (
                <CatalogItem id={item.id}/>
            ))}
        </div>
  </Layout>
)

export default IndexPage
