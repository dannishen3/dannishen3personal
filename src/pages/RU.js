import React from "react"
import RU0 from '../images/RU0.jpg'
import RU1 from '../images/RU1.jpg'
import RU2 from '../images/RU2.jpg'
import RU3 from '../images/RU3.jpg'
import RU4 from '../images/RU4.jpg'

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import { css } from 'emotion'

const imageStyle = css`
  width: calc(33% - 30px);
  height: auto;
  margin-right: 30px;
`;
const imagesContainer = css`
  padding: 0 65px;
`;

const Page = () => {
    return (
        <Layout>
            <SEO title="Residency Unlimited" />
            <div class="custom-page">
                <h1 class="custom-page-header page-title has-dash">Residency Unlimited</h1>
                <div class="custom-page-content">
                    <p><a target="_blank" href="http://www.silasvonmorisse.com/exhibitions/common-place-a-group-exhibition-of-new-works-by-artists-in-residence-at-residency-unlimited-ru-curated-by-danni-shen">COMMON PLACE</a> @ART 3 Gallery: A group exhibition of new works by Fatma Shanan (Israel), Janine Mackenroth (Germany), Clare Kenny (Switzerland), & Douglas Argüelles Cruz (Cuba). [July 11–16, 2018 @109 Ingraham St, Brooklyn, NY] </p>
                    <p>Common Place looks at recently-developed bodies of works confronting, adapting, expanding on history, industry, materiality and the localities and timelines which inform them. This group exhibition, featuring international artists with Residency Unlimited (RU), explores a scope of gestural renewal. A Persian carpet, a running fountain, industrial-grade painting, blue chips, and solid nail polish – the works in this exhibition also serve as signifiers which draw attention to the critical transformations born of everyday-encountered matter and forms.</p>
                </div>
                <div className={imagesContainer}>
                    <img className={imageStyle} src={RU0}></img>
                    <img className={imageStyle} src={RU1}></img>
                    <img className={imageStyle} src={RU2}></img>
                    <img className={imageStyle} src={RU3}></img>
                    <img className={imageStyle} src={RU4}></img>
                </div>
            </div>
    
        </Layout>
    );
}

export default Page