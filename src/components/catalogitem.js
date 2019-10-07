import { Link } from "gatsby"
import React from 'react';
import catalog from '../catalog';

export default function ({id}) {
    const catalogItem = catalog[id];
    return (
        <Link to={catalogItem.href} title={catalogItem.title} className="product-list-item rollover">
            <div className="product-list-item-container">
            <figure className="product-list-image-container">
                <img alt={catalogItem.alt_text} className="fade-in product-list-image image-square" src={catalogItem.img_src}/>
            </figure>
            </div>
            <div className="product-list-item-info">
            <div className="product-list-item-background"></div>
            <div className="product-list-item-info-headers">
                
                <div className="product-list-item-name">{catalogItem.title}</div>
                <div className="product-list-item-price">description</div>
            </div>
            </div>
        </Link>
    );
}