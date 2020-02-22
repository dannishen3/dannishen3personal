import React from "react"
import art1 from '../images/art1.gif';
import art2 from '../images/art2.gif';
import art3 from '../images/art3.gif';
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from 'emotion'

const imageStyle = css`
  width: 25%;
  height: auto;
`;
const imageRow = css`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;



const Image = () => (
  <Layout>
    <SEO title="image" />
    <div className={imageRow}>
      <img className={imageStyle} src={art1}></img>
      <img className={imageStyle} src={art2}></img>
      <img className={imageStyle} src={art3}></img>
    </div>
  </Layout>
)

export default Image