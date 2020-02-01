import React from 'react'

import styled, { css } from 'styled-components'
import FontAwesome from 'react-fontawesome'

const Icon = ({ name, href }) => (
  <a href={href}>
    <FontAwesome name={name} />
  </a>
)

const Base = styled.div`
  margin: 20px 0;
  text-align: center;
  font-size: 30px;
  width: 100px;
  height: 100px;
  border: 2px solid #fff; 
  border-radius: 50%;
  transition: color .2s ease-in;

  & a {
    display: inline-block;
    margin: 0 25px;
    color: #fff;
  }
  & a span {
    transition: color .2s ease-in;
  }
  & a:hover {
    text-decoration: none;
    text-shadow: 1px 1px 10px #4d4d4d;
  }
  & a:hover span.fa-phone {
    color: #fff;
  }
  & a:hover span.fa-instagram {
    color: #3cf;
  }
  & a:hover span.fa-twitter {
    color: #fc6d26;
  }
`

class Button extends React.Component {
  render() {
    const icons = this.props.icons.map(function(icon) {
      return <Icon key={icon.name} name={icon.name} href={icon.href} />
    })
    return <Base {...this.props}>{icons}</Base>
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

export default Button
