import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Me" />
    <p className="centered-message">
      danni0shen@gmail.com
    </p>
    <p className="empty-cart-message centered-message">
    Danni Shen is an
independent curator and writer. She has held curatorial roles at SPRING BREAK Art Show LA
and NY and more previously at Empty Gallery, a black-cube space dedicated to time-based,
non-object-oriented, interdisciplinary practices. She is based in New York, where she was also
the Curatorial Fellow at Wave Hill and Curator-in-Residence at Residency Unlimited. She is a
contributor to various publications including BOMB Magazine, The Brooklyn Rail,
Hyperallergic, Rhizome, onscreentoday, and has written catalogue essays for artists Jillian
Mayer, Wonjung Choi, Esperanza Cortés, Mo Kong, Rina Banerjee among others. Shen is the
most recent recipient of the Art Critic Mentoring Program in collaboration with CUE Art
Foundation x International Association of Art Critics 2019.
    </p>
    <a className="centered-message" href="/resume.pdf">Resume</a>
  </Layout>
)

export default Contact
