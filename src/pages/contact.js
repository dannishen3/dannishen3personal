import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h1 class="page-title has-dash">Contact</h1>
    <p class="empty-cart-message centered-message">
        <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">Send Mail</a>
    </p>
  </Layout>
)

export default Contact
