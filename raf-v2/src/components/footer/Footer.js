import React from 'react';
import FooterInfo from './footerInfo';
import ContactRow from './contactRow';

const Footer = () => {
  return (
    <>
    <ContactRow/>
        <FooterInfo>
    <footer>
      © {new Date().getFullYear()}, Design & built by
      {` `}
      <a href="/">Lukassso</a>
    </footer>
    </FooterInfo>
    </>
  );
};

export default Footer;
