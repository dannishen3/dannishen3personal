import React from "react"
import art1 from '../images/art1.gif';
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from 'emotion'

const imageStyle = css`
  width: 25%;
  height: auto;
`;



const Image = () => (
  <Layout>
    <SEO title="image" />
    <img className={imageStyle} src={art1}></img>
  </Layout>
)

export default Image