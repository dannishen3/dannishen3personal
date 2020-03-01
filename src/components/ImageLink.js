import { Link } from "gatsby"
import React from 'react';
// import catalog from '../catalog';

export default function (props) {
    // const catalogItem = catalog[id];
    return (
        <Link to={props.href} title={props.title} className="product-list-item rollover">
            <img alt={props.alt_text} className="fade-in product-list-image" src={props.img_src}/>
            <div className="product-list-item-container">
            <figure className="product-list-image-container">
            </figure>
            </div>
            <div className="product-list-item-info">
            <div className="product-list-item-background"></div>
            <div className="product-list-item-info-headers">
                
                <div className="product-list-item-name">{props.title}</div>
                <div className="product-list-item-price">{props.description}</div>
            </div>
            </div>
        </Link>
    );
}
