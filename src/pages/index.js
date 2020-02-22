import React from "react"
import mica_1 from '../images/mica_1.jpg';
import eldridge_1 from '../images/eldridge_1.jpg';
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
          img_src={mica_1}
          alt_text="hover tooltip text"
          title="current"
          description="Critic-in-Residence @MICA"
          href="current"
        />&nbsp;&nbsp;
      <ImageLink
          img_src={eldridge_1}
          alt_text="hover tooltip text"
          title="upcoming"
          description="Curator: 601artspace, Herkimer Pl., left.gallery"
          href="upcoming"
        />
      </div>
      <div className="main-images-container">
        <ImageLink
          img_src={RU_1}
          alt_text="hover tooltip text"
          title="ART3 Gallery: Common Place"
          description="Residency Unlimited"
          href="RU"
        />&nbsp;&nbsp;
      <ImageLink
          img_src={EG_1}
          alt_text="hover tooltip text"
          title="previous"
          description="SPRING/BREAK, Empty Gallery, Wave Hill, etc."
          href="previous"
        />
        </div>
  </Layout>
)

export default IndexPage
