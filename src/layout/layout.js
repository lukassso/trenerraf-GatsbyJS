import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Footer from '../components/footer';
import {theme} from '../utils/theme';

const GlobalStyle = createGlobalStyle`

  @import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
  body {
    font-family: "Montserrat";
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`
const Content = styled.div`
`

const Layout = ({ location, children }) => {
  return (
    <ThemeProvider theme={theme} >
      <>
      <GlobalStyle/>
      <Helmet
        title="Rafał Kiszło - Trener personalny Mokotów"
        meta={[ 
          { name: 'description', content: 'Zapraszam na wspólne treningi na Mokotowie - Trener personalny Rafał Kiszło' },
          { name: 'keywords', content: 'Rafał Kiszło, strona www' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]}
      />
      <Content>{children}</Content>
      {/* {location && location.pathname != '/404'} */}
      <Footer/>
      </>
    </ThemeProvider>
  )
}

export default Layout
