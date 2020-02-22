import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

const Page = () => {
    return (
        <Layout>
            <SEO title="Residency Unlimited" />
            <div class="custom-page">
                <h1 class="custom-page-header page-title has-dash">Residency Unlimited</h1>
                <div class="custom-page-content">
                    <p>hello world</p>
                </div>
            </div>
    
        </Layout>
    );
}

export default Page