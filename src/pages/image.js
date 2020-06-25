import React from "react"
import art4 from '../images/art4.jpg';
import art5 from '../images/art5.jpg';
import art6 from '../images/art6.jpg';

// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from 'emotion'

const imageStyle = css`
  width: calc(33% - 30px);
  height: auto;
  margin-right: 30px;
`;
const imagesContainer = css`
  padding: 0 65px;
`;



const Image = () => (
  <Layout>
    <SEO title="image" />
    <div className={imagesContainer}>
      <img className={imageStyle} src={art4}></img>
      <img className={imageStyle} src={art5}></img>
      <img className={imageStyle} src={art6}></img>

    </div>
  </Layout>
)

export default Image
