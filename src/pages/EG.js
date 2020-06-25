import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

const Page = () => {
    return (
        <Layout>
            <SEO title="EG" />
            <div class="custom-page">
                <h1 class="custom-page-header page-title has-dash">Empty Gallery</h1>
                <div class="custom-page-content">
                    <p>
                        [2016]<br></br>
                        <a href="https://emptygallery.com/exhibitions/eg05-cinema-concret/"target="_blank">Cinema Concret: Takashi Makino</a><br></br>
                        <a href="https://emptygallery.com/exhibitions/eg05-cinema-concret-kaya-cynara/"target="_blank">Kaya Cynara: Hans-Henning Korb</a></p>
                    <p>
                        [2017]<br></br>
                        <a href="https://emptygallery.com/exhibitions/eg06-infinite-doors/"target="_blank">Infinite Doors: Takeshi Murata</a><br></br>
                        <a href="https://emptygallery.com/exhibitions/eg07-catchy/"target="_blank">Catchy [Frieze NY]: Jacqueline Kiyomi Gordon</a><br></br> 
                        <a href="https://emptygallery.com/exhibitions/eg08-everything-visible-is-empty/"target="_blank">Everything Visible is Empty</a><br></br> 
                        <a href="https://emptygallery.com/exhibitions/eg09-shocking-asia/"target="_blank">Shocking Asia: C. Spencer Yeh</a></p>
                    <p>
                        [2018]<br></br>
                        <a href="https://emptygallery.com/exhibitions/eg10motherisawoman/"target="_blank">Mother is a Woman: Jes Fan</a><br></br>
                        <a href="https://emptygallery.com/exhibitions/eg10ruthlesslogic/"target="_blank">Ruthless Logic: Xavier Cha</a><br></br>
                        <a href="https://emptygallery.com/exhibitions/eg11-thresholds-of-perception/"target="_blank">Thresholds of Perception: Catherine Christer Hennix</a><br></br>
                        <a href="https://emptygallery.com/fairs/the-armory-show-new-york-2018/"target="_blank">The Armory Show [NY]: Tishan Hsu and Takeshi Murata</a></p>
                </div>
            </div>
    
        </Layout>
    );
}

export default Page