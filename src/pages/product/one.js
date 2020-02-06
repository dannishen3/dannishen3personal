import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProductDetail from '../../components/productdetail';

const SecondPage = () => {
    return (
        <Layout>
            <SEO title="Page two" />
            <ProductDetail id={1}/>
    
        </Layout>
    );
}

export default SecondPage