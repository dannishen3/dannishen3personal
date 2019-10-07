import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProductDetail from '../../components/productdetail';

const SecondPage = () => {
    return (
        <Layout>
            <SEO title="Page two" />
            <ProductDetail id={5}/>
    
        </Layout>
    );
}

export default SecondPage