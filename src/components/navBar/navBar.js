import React from 'react';
import scrollToElement from 'scroll-to-element';

import Name from './name';


class NavBar extends React.Component {
  render() {
    const linkMap = this.props.children.map(el => {
        if (el.props.id){
          return { name: el.props.children, href: `#${el.props.id}`} }
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
      <div {...this.props}>
        <div>
          <div>
            <Name />
          </div>
          <div>
            <ul>{links}</ul>
          </div>
        </div>
      </div>
    )
  }
}
 
export default NavBar
