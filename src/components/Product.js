import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { formatMoney, getProductStatus } from '../utils';

export default ({pageContext}) => {
    const { product, previous_product, next_product } = pageContext;
    const product_status = getProductStatus(product);

    const aside = (
        <aside class="related-products-container wrapper" aria-label="Related products">
          {(!!previous_product || !!next_product) && (
            <ul class="prev-next-products">
            {!!previous_product && <li><Link to={previous_product}>Previous Product</Link></li>}
            {!!next_product && <li><Link to={next_product}>Next Product</Link></li>}
          </ul>
          )}
        </aside>
    );
    return (
        <Layout
            bodyClass="main"
            bodyId="product_page"
            aside={aside}
        >
            <SEO title={product.name} />
            <div class="product-page">
                <div class="product-page-headings">
                    { !!product_status && <span class="product-status">{ product_status }</span>}
                    { !!product.inventory && <span class="product-status">{ product.inventory }</span>}
                    <h1 class="product-title has-dash">{ product.name }</h1>
                    <div class="product-price">
                    {product.xvariable_pricing ?
                        `${formatMoney(product.xmin_price)} - ${formatMoney(product.xmax_price)}` :
                        `${formatMoney(product.default_price)}`
                    }
                    </div>
                </div>

                <div class={`product-images${product.images.length > 1 ? ' product-images-slideshow' : ''}`}>
                    <ul class="slides">
                        {
                            product.images.map((image, i) => (
                                <li key={i}>
                                    <img alt={product.name} class="product-image" src={image.childImageSharp.fluid.src} srcSet={image.childImageSharp.fluid.srcSet}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            <div class="product-details">
                {!!product.description &&
                <div class="product-description">
                    {product.description}
                    {/* {{ product.description | paragraphs }} */}
                </div>
                }

                {
                product.status === 'active' &&
                <div>
                    <input type="hidden" name="utf8" value='✓'/>
                    {product.paypal_id &&
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="hosted_button_id" value={product.paypal_id}/>
                        <table>
                        <tbody>
                        <tr>
                        <td>
                            <input type="hidden" name="on0" value={product.options_label}/>{product.options_value}
                        </td>
                        </tr>
                        {product.show_text_field && <tr><td><input type="text" name="os0" maxlength="200"></input></td></tr>}
                        {!!product.options?.length && (
                        <tr>
                        <td>
                            <div class="select">
                            <select class="product_option_select" name="os0" aria-label="Select option">
                                {product.options.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                                <svg viewBox="0 0 15 7.6" enableBackground="new 0 0 15 7.6"><path d="M15 1.1l-7.5 6.5-7.5-6.3 1-1.2 6.5 5.5 6.5-5.6z"/></svg>
                            </div>
                        </td>
                        </tr>
                        )}
                        <input type="hidden" name="currency_code" value="USD"/>
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                        <img class="paypal-pixel" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                        </tbody>
                        </table>
                    </form>
                    }
                </div>
                }
                {/* {% if theme.show_facebook or theme.show_twitter or theme.show_pinterest %}
                <ul class="social-buttons">
                    {% if theme.show_facebook %}
                    <li class="social-facebook">
                    <div class="social-title">Share it</div>
                    <div class="social-action">
                        <div class="fb-share-button" data-href="{{ page.full_url }}" data-layout="button" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u={{ page.full_url }}src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                    </div>
                    </li>
                    {% endif %}
                    {% if theme.show_twitter %}
                    <li class="social-twitter">
                    <div class="social-title">Tweet It</div>
                    <div class="social-action">
                        <a href="https://twitter.com/share" class="twitter-share-button" data-url="{{ page.full_url }}" data-text="Check out {{ product.name }} from {{ store.name }}!">Tweet</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
                    </div>
                    </li>
                    {% endif %}
                    {% if theme.show_pinterest %}
                    <li class="social-pinterest">
                    <div class="social-title">Pin It</div>
                    <div class="social-action">
                        <a href="http://pinterest.com/pin/create/button/?url={{ page.full_url }}&media={{ product.image.url }}&description={% if product.description != blank %}{{ product.description | escape | truncate: 490 }}{% endif %}" class="pin-it-button" count-layout="horizontal"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It"></a>
                        <script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>
                    </div>
                    </li>
                    {% endif %}
                </ul>
                {% endif %} */}
            </div>
        </div>
    </Layout>
    )

}
