import React from 'react';
import catalog from '../catalog';

export default function ProductDetail ({id = 1}) {
    const item = catalog[id];
    return (
        <div className="product-page">
            <div className="product-page-headings">
                
                <h1 className="product-title has-dash">{item.title}</h1>
                {
                    item.price != null ? 
                    <h2 className="product-price">
                        <span className="currency_sign">$</span>{item.price}
                    </h2> : null
                }
            </div>

            <div className="product-images">
                <ul className="slides">
                
                    <li><img className="product-image" src={item.img_src} alt={item.img_alt}/></li>
                
                </ul>
            </div>

            <div className="product-details">
                
                <div className="product-description">
                    {item.description_1 ? <p>{item.description_1}</p> : ''}
                    {item.description_2 ? <p>{item.description_2}</p> : ''}
                </div>
            </div>
        </div>
    );
}