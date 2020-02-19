import React from 'react'
// import { graphql } from "gatsby";

import styled, { css } from 'styled-components'
import FontAwesome from 'react-fontawesome'

const Iconn = ({ name, href }) => (
  <a href={href}>
    <FontAwesome name={name} />
  </a>
)

const Base = styled.div`
 position: absolute;
          left: 50%;
          transform: translate(-50%,-50%);
          bottom: 60px;
          fontWeight: 600;
          fontSize: 60;

  margin: 20px 0;
  text-align: center;
  font-size: 30px;
  width: 100px;
  height: 100px;
  border: 2px solid; 
  border-radius: 50%;
  transition: color .2s ease-in;
  &:before fa-phone {
    color: red;
  }
  & a {
    display: flex;
    width: 100px;
    justify-content: center;
    /* margin: 0 auto; */
    margin-top: 15px;
    align-items: center;
    flex-direction: column;
  }
  & a .fa-spin {
    animation: fa-spin 10s infinite linear;
  }
  & a span {
    transition: color .2s ease-in;
  }
  & a:hover {
    text-decoration: none;
    text-shadow: 1px 1px 10px #4d4d4d;
  }
  & a:hover span.fa-phone {
  }
 
 
`

class Button extends React.Component {
  render() {
    // const buttons = this.props.buttons.map(({key, name, href}) => (
    //   <Iconn key={name} name={name} href={href} />
    // ))
    // return (<Base {...this.props}>{buttons}</Base>)
    //  const buttons = this.props.buttons.map(({name, href}) => (
    //   <Iconn name={name} href={href} />
    // ))
    return (<Base >
      <a href="tel:+48608472294">
      <FontAwesome
        className="super-crazy-colors"
        name="phone"
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    </a>
    </Base>)
    // return (
    //   <div>dupa</div>
    // )
  }
}

// const Button = styled.button`
//   border: 2px solid #444;
//   background-color: #fff;
//   padding: 0 35px;
//   height: 60px;
//   min-width: 190px;
//   line-height: 36px;
//   font-size: 18px;
//   font-weight: 700;
//   // text-transform: uppercase;
//   letter-spacing: 1px;
//   border-radius: 10px;
//   color: #444;
//   text-align: center;
//   transition: all 1.2s ease;
//   -webkit-transition: all 1.3s ease;
//   -moz-transition: all 1.3s ease;
//   margin-right: 8px;
//   margin-bottom: 24px;
//   cursor: pointer;

//   &:hover {
//     color: #fff;
//     background-color: #4f4f4f;
//   }

//   ${props =>
//     props.dark &&
//     css`
//       color: #949494;
//       border-color: #949494;
//       &:hover {
//         color: #fff;
//         background-color: #949494;
//       }
//     `}

//   ${props =>
//     props.light &&
//     css`
//       color: #ddd;
//       border-color: #ddd;
//     `}

//   ${props =>
//     props.opaque &&
//     css`
//       background: none;
//       &:hover {
//         background-color: transparent;
//         color: #fff;
//         border-color: #fff;
//       }
//     `}

//   ${props =>
//     props.small &&
//     css`
//       height: 30px;
//       font-size: 11px;
//       line-height: 27px;
//       min-width: 0;
//     `}
// `

export default Button;
