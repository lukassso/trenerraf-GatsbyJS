import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
// import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles'
import Footer from '../components/footer'
import theme from '../theme'
import CssBaseline from '@material-ui/core/CssBaseline'

const Layout = ({ location, children }) => {
  return (
    <React.Fragment>
      {/* <GlobalStyle/> */}
      <Helmet
        title="Rafał Kiszło - Trener personalny Mokotów"
        meta={[
          {
            name: 'description',
            content:
              'Zapraszam na wspólne treningi na Mokotowie - Trener personalny Rafał Kiszło',
          },
          { name: 'keywords', content: 'Rafał Kiszło, strona www' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;900&display=swap"
          // rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          // rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          rel="stylesheet"
        ></link>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        {location && location.pathname != '/404'}
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}
Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.node,
}

export default Layout
