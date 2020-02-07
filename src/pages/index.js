import React from "react"
import RU_1 from '../images/RU_1.jpeg';
import EG_1 from '../images/EG_1.jpg';
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ImageLink from '../components/ImageLink'
import {catalog_list} from '../catalog';
import catalog from '../catalog';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="main-images-container">
        <ImageLink
          img_src={RU_1}
          alt_text="hover tooltip text"
          title="ART3 Gallery: Common Place"
          description="Residency Unlimited"
          href="about"
        />&nbsp;&nbsp;
      <ImageLink
          img_src={EG_1}
          alt_text="hover tooltip text"
          title="Empty Gallery: Hong Kong"
          description="Exhibitions"
          href="about"
        />
      </div>
      <div className="main-images-container">
        <ImageLink
          img_src={RU_1}
          alt_text="hover tooltip text"
          title="ART3 Gallery: Common Place"
          description="Residency Unlimited"
          href="about"
        />&nbsp;&nbsp;
      <ImageLink
          img_src={EG_1}
          alt_text="hover tooltip text"
          title="Empty Gallery: Hong Kong"
          description="Exhibitions"
          href="about"
        />
        </div>
  </Layout>
)

export default IndexPage
