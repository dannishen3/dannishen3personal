import React from "react"
import art1 from '../images/art1.gif';
import art2 from '../images/art2.gif';
import art3 from '../images/art3.gif';
import art4 from '../images/art4.jpg';
import art5 from '../images/art5.jpg';
import art6 from '../images/art6.jpg';
import art7 from '../images/art7.jpg';
import art8 from '../images/art8.jpg';
import art9 from '../images/art9.jpg';
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
      <img className={imageStyle} src={art1}></img>
      <img className={imageStyle} src={art2}></img>
      <img className={imageStyle} src={art3}></img>
      <img className={imageStyle} src={art4}></img>
      <img className={imageStyle} src={art5}></img>
      <img className={imageStyle} src={art6}></img>
      <img className={imageStyle} src={art7}></img>
      <img className={imageStyle} src={art8}></img>
      <img className={imageStyle} src={art9}></img>
    </div>
  </Layout>
)

export default Image