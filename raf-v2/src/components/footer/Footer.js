import React from 'react';

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Design & built by
      {` `}
      <a href="/">Lukassso</a>
    </footer>
  );
};

export default Footer;
