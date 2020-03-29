import React from 'react'
// import styled, { css } from 'styled-components'
// import FontAwesome from 'react-fontawesome'

const Icon = ({ name, href }) => (
  <a href={href}>
  </a>
)

// const Base = styled.div`
//   margin: 20px 0;
//   text-align: center;
//   font-size: 30px;
//   & a {
//     display: inline-block;
//     margin: 0 25px;
//   }
//   & a span {
//     transition: color .2s ease-in;
//   }
//   & a:hover {
//     text-decoration: none;
//   }
//   & a:hover span.fa-facebook {
//     color: #4875b4;
//   }
//   & a:hover span.fa-instagram {
//     color: #3cf;
//   }
//   & a:hover span.fa-twitter {
//     color: #fc6d26;
//   }
// `

class SocialIcons extends React.Component {
  render() {
    const icons = this.props.icons.map(function(icon) {
      return <div key={icon.name} name={icon.name} href={icon.href} />
    })
    return <div {...this.props}>{icons}</div>
  }
}

export default SocialIcons
