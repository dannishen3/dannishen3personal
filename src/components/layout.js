/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../styles/layout.sass";
import "../styles/products.sass";
import "../styles/product.sass";
import "../styles/theme.css";
import Helmet from 'react-helmet'
import Footer from "./Footer"

const Layout = ({ children, bodyClass='', bodyId='', aside }) => {

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.SiteGlobalState = window.SiteGlobalState || {};
    }
  }, []);

  const [sawMessage, setSawMessage] = React.useState(
    typeof window !== 'undefined' ? !!window?.SiteGlobalState?.sawMessage : false
  );
  if (!sawMessage) bodyClass += ' has-announcement-message';
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        bodyAttributes={{
          id: bodyId,
          class: bodyClass
        }}
      >
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat:400,500,700|Varela+Round"/>
      </Helmet>
      <aside aria-label="Announcement message" className="announcement-message">
        <div className="wrapper announcement-message-text">free shipping on all orders</div>
        <button onClick={()=>{
          if (typeof window !== 'undefined') {
            window.SiteGlobalState.sawMessage = true;
          }
          setSawMessage(!sawMessage);
          }} aria-label="Close announcement" className="announcement-message-close" title="Close announcement message">
          <svg aria-hidden="true" height="16" viewBox="0 0 512 512" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"/></svg>
        </button>
      </aside>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main className="main" id="main">
          <div className="fade-in wrapper">
          {children}
          </div>
        </main>
        {aside}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
