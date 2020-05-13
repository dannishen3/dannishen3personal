import React from "react"
import mica_1 from '../images/mica_1.jpg';
import eldridge_1 from '../images/eldridge_1.jpg';
import RU_1 from '../images/RU1.jpg';
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
          description="Critic-in-Residence @MICA (SPRING 2020)"
          href="current"
        />&nbsp;&nbsp;
      <ImageLink
          img_src={eldridge_1}
          alt_text="hover tooltip text"
          title="upcoming"
          description="Collabrative Survival @601artspace (2020)"
          href="upcoming"
        />
      </div>
      <div className="main-images-container">
        <ImageLink
          img_src={RU_1}
          alt_text="hover tooltip text"
          title="ART 3 Gallery: Common Place"
          description="Residency Unlimited (2018)"
          href="RU"
        />&nbsp;&nbsp;
      <ImageLink
          img_src={EG_1}
          alt_text="hover tooltip text"
          title="Empty Gallery "
          description="New York / Hong Kong (2017-18)"
          href="EG"
        />
        </div>
  </Layout>
)

export default IndexPage
