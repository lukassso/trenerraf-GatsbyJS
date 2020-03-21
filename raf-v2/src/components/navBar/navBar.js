import React from "react";
import PropTypes from "prop-types";
import styled, { css } from 'styled-components';
import scrollToElement from 'scroll-to-element';
import { Link } from "gatsby";
import Logo from './logo';

const Base = styled.div`
  padding: 0;
  margin: 0;
  // max-height: 62px;
  line-height: 62px;
  width: 100vw;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
  & ul > li a,
  & ul > li {
    height: 62px;
    font-size: 11px;
    float: right;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    transition: opacity .3s ease;
  }
  & ul > li a {
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-weight: 600;
    color: #0B0B0B;

    letter-spacing: 1px;
    margin-right: 32px;
  }


`

class NavBar extends React.Component {
 
  render() {
    const linkMap = this.props.childrenn
      .map(el => {
        if (el.props.id)
          return { name: el.props.children, href: `#${el.props.id}` }
      })
      .filter(n => n !== undefined)
      .reverse()
    const links = linkMap.map(function(link) {
      return (
        <li key={link.name}>
          <a
            onClick={() => {
              scrollToElement(link.href)
            }}
          >
            {link.name}
          </a>
        </li>
      )
    })
    // debugger
    
    return (
      <Base {...this.props}>
        <div>
          <div>
            <Logo />
          </div>
          <div >
            <ul>{links}</ul>
          </div>
        </div>
      </Base>
    )
  }
}

export default NavBar


// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       marginBottom: `1.45rem`,
//     }}
//   >

//     <Logo />
   
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//        <Head>test</Head>
//     </div>
//        {/* <TestImg/> */}
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
