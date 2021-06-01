import React from "react"
import { Link } from "gatsby";

const DLink = (props) => {
    if (props.disabled) return props.children;
    return <Link {...props}/>;
}

export default ({collections}) => {
    // const product_image_constrain_width = 346;
    // const product_image_constrain_height = 346;
    // const product_image_constrain_width_large = product_image_constrain_width * 2;
    // const product_image_constrain_height_large = product_image_constrain_height * 2;
    // const thumb_constrain_width = 30;
    // const thumb_constrain_height = 30;
  return (
        <>
        <h1 class="page-title visually-hidden">Collections</h1>
            {collections.length > 0 &&
            <div class="product-list-container">
                <div class="product-list">
                    {collections.map(collection => {
                        collection = collection.node;
                        return (
                            <div key={collection.id} class="product-list-thumb crop-to-square under_image">
                                <DLink disabled={collection.disabled} class="product-list-link" title={`View ${collection.name}`} to={collection.url}>
                                <div class="product-list-thumb-container">
                                    <figure class="product-list-image-container">
                                    <div class="image-wrapper">
                                        <img
                                            alt=""
                                            class="product-list-image image-wide" src={collection.image?.childImageSharp.fluid.src}
                                            srcSet={collection.image?.childImageSharp.fluid.srcSet}/>
                                    </div>
                                    </figure>
                                </div>
                                <div class="product-list-thumb-info">
                                    <div class="product-list-item-background"></div>
                                    <div class="product-list-thumb-info-headers">
                                    <div class="product-list-thumb-name">{ collection.name }</div>
                                    </div>
                                </div>
                                </DLink>
                            </div>
                    )})}
                </div>
            </div>
            }
        </>
    )

}
