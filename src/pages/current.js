import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

const Page = () => {
    return (
        <Layout>
            <SEO title="current" />
            <div class="custom-page">
                <h1 class="custom-page-header page-title has-dash">MICA: Photographic &amp; Electronic Media</h1>
                <div class="custom-page-content">
                    <p>Critic-in-Residence: 1st &amp; 2nd year graduate cohorts</p>
                    <p><a href="https://www.mica.edu/graduate-programs/photographic-electronic-media-mfa/faculty/" target="_blank">PEM Faculty Page</a></p>
                </div>
            </div>
    
        </Layout>
    );
}

export default Page