import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components';
import React from "react";
import TestImg from '../../images/yellowPlum.svg';

const Head = styled.div`
      color: ${({theme}) => theme.color.secondary};
 
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
   
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
       <Head>test</Head>
    </div>
       {/* <TestImg/> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
