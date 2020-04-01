import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
// import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import Footer from '../components/footer';
import theme from '../theme';

const Layout = ({ location, children }) => {
  return (
      <>
      {/* <GlobalStyle/> */}
      <Helmet
        title="Rafał Kiszło - Trener personalny Mokotów"
        meta={[ 
          { name: 'description', content: 'Zapraszam na wspólne treningi na Mokotowie - Trener personalny Rafał Kiszło' },
          { name: 'keywords', content: 'Rafał Kiszło, strona www' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]}
      />
       <ThemeProvider theme={theme} >
      {children}
      {location && location.pathname != '/404'}
      <Footer/>
    </ThemeProvider>
     </>
  )
}
Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.node
};

export default Layout
