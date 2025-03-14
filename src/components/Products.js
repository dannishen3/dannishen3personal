import React from "react"
// import products from '../products';
import { Link } from "gatsby";
import { formatMoney, getProductStatus } from "../utils";

export default ({products}) => {
    // const product_image_constrain_width = 346;
    // const product_image_constrain_height = 346;
    // const product_image_constrain_width_large = product_image_constrain_width * 2;
    // const product_image_constrain_height_large = product_image_constrain_height * 2;
    // const thumb_constrain_width = 30;
    // const thumb_constrain_height = 30;
  return (
        <>
        <h1 class="page-title visually-hidden">Products</h1>
            {products.length > 0 &&
            <div class="product-list-container">
                <div class="product-list">
                    {products.map(product => {
                        return (
                            <div key={product.name} class="product-list-thumb crop-to-square under_image">
                                <Link class="product-list-link" title={`View ${product.name}`} to={product.url}>
                                <div class="product-list-thumb-container">
                                    <figure class="product-list-image-container">
                                    <div class="image-wrapper">
                                        <img
                                            alt=""
                                            class="product-list-image image-wide" src={product.images?.[0]?.childImageSharp.fluid.src}
                                            srcSet={product.images?.[0]?.childImageSharp.fluid.srcSet}/>
                                    </div>
                                    </figure>
                                </div>
                                <div class="product-list-thumb-info">
                                    <div class="product-list-item-background"></div>
                                    <div class="product-list-thumb-info-headers">
                                    <div class="product-list-thumb-name">{ product.name }</div>
                                    <div class="product-list-thumb-price">
                                        {product.xvariable_pricing ?
                                            `${formatMoney(product.xmin_price)} - ${formatMoney(product.xmax_price)}` :
                                            `${formatMoney(product.default_price)}`
                                        }
                                        <div class="product-list-thumb-status">{getProductStatus(product)}</div>
                                        <div class="product-list-thumb-status">{product.inventory}</div>
                                    </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                    )})}
                </div>
            </div>
            }
        </>
    )

}
