/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {theme} from '../../utils/theme';

import Header from "../navBar";
import Footer from '../footer';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Montserrat";
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

`

const Layout = ({ children }) => {
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
    <ThemeProvider theme={theme}>

    <>
    <GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
    </ThemeProvider>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
