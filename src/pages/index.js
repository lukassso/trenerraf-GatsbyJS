import React from "react";
import { graphql } from "gatsby";
// import { Flex, Box } from "grid-styled";
import styled, { css } from "styled-components";
// import Img from "gatsby-image";
// import Img from "gatsby-image/withIEPolyfill"
// import FlickrHero from "react-flickr-hero";

// import { media } from "../utils/media";

import Layout from "../layout/layout";
import NavBar from "../components/navbar";
import SocialIcons from "../components/socialIcons";
import Button from "../components/button";

const Content = styled.div`
  position: relative;
  display: block;
  // & > a {
  //   visibility: hidden;
  display: block;
  //   color: #0B0B0B;
  // }
  // & > h1 {
  //   text-align: center;
  // }
`;

const Title = styled.h1`
  // font-family: "Montserrat";
  // text-transform: uppercase;
  // letter-spacing: 6px;
  // margin-bottom: 40px;
  // font-weight: 400;
  // font-size: 32px;
  // line-height: 40px;
  // border: none;
  // color: #292929;
  ${props =>
    props.small &&
    css`
      // font-size: 12px;
      // letter-spacing: 2px;
      // font-weight: 700;
      // line-height: 24px;
    `}
  ${props =>
    props.dark &&
    css`
      color: #fff !important;
    `}
`;

const Section = styled.div`
  color: ${({theme}) => theme.color.secondary};
  // a {
  //   font-family: "Montserrat";
  //   // color: #0B0B0B;
  // }

  // p {
  //   margin-bottom: 64px;
  //   font-size: large;
  //   color: #666;
  // }

  // h1,
  // h2,
  // h3,
  // h4,
  // h5,
  // h6 {
  //   font-family: "Montserrat";
  //   // text-transform: uppercase;
  //   color: #292929;
  // }

  // h4 {
  //   letter-spacing: 3px;
  //   font-weight: 400;
  //   font-size: 24px;
  //   line-height: 32px;
  //   color: #292929;
  // }

  // span {
  //   color: #666;
  //   opacity: 0.5;
  //   display: block;
  // }

  // & > div:last-child {
  //   border-bottom: none !important;
  // }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }
      // ${media.xs`
      //   & > div {
      //     margin-left: 3vw !important;
      //   }
      // `}
    `}

  ${props =>
    props.dark &&
    css`
      background: ${({theme}) => theme.color.dark};
      color: ${({theme}) => theme.color.white};
      // * {
      //   color: #fff;
      // }
      // span {
      //   text-align: left;
      //   font-size: 16px;
      //   line-height: 28px;
      //   font-weight: 400;
      //   opacity: 0.5;
      // }
      // span,
      // p {
      //   color: #fefefe !important;
      // }
      // h6 {
      //   color: #fff;
      //   font-weight: 700;
      // }
      // h4 {
      //   color: #fff;
      // }
      // div {
      //   border-bottom: 1px solid #333 !important;
      // }
    `}
`;

const HeroSection = styled.div`
  height: 100vh;
  // display: flex;
  a {
    // color: #0B0B0B;
  }
`;

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  // ${media.xs`
  //   width: 90%;
  // `}
`;
const HeaderLeft = styled.div`
  width: 100px;
  border: 1px solid red;
  height: 80px;
`;

export default (props, data) => {
  const content = (
    <Content>
      <HeroSection css={{ margin: "0 50px;" }}>
        <div mx="auto" justifyContent="center">
          <div width={(0, 1 / 4, 2 / 6)}>
            <HeaderLeft>Stań się lepszą wersją siebie!</HeaderLeft>
            <Button />
          </div>
          <div width={[1, 3 / 4, 4 / 6]}>
            
          </div>
        </div>
      </HeroSection>
      <a id="experience">Doświadczenie</a>
      <Section>
        <Title>Przebyte kursy i szkolenia</Title>
        <p>Zwycięzca w konkursie "Motywatory Fitness"</p>
        <Title>Nagrody i wyróżnienia</Title>
        <Title>Partnerzy</Title>
      </Section>
      <a id="testimondial">Opinie</a>
      <Section dark>
        <Title dark>O mnie</Title>
      </Section>
      <Title>Opinie Klientów</Title>
      {/* <a id="portfolio">Portfolio</a>
      <Portfolio items={props.data.allMarkdownRemark.edges} />
      <a id="experience">Experience</a>
      <Section center dark>
        <h4>Experience</h4>
        <span>Where I've worked.</span>
        <Item>
          <span>MAY 2018 - CURRENT</span>
          <h6>SHUTTERSTOCK</h6>
          <p>Software Engineer</p>
        </Item>
        <Item>
          <span>JUNE 2016 - APRIL 2018</span>
          <h6>SAP IRELAND</h6>
          <p>Full Stack Developer</p>
        </Item>
        <Item>
          <span>FEB 2015 - AUG 2015</span>
          <h6>SAP IRELAND</h6>
          <p>Support Engineer</p>
        </Item>
        <Item>
          <span>JAN 2014 - JULY 2014</span>
          <h6>ST DECLAN'S COLLEGE</h6>
          <p>Full Stack Developer</p>
        </Item>
      </Section>
      <a id="tech">Tech</a>
      <Section center>
        <h4>Tech</h4>
        <span>Technologies I enjoy working with.</span>
        <Showcase
          images={
            props.data.allImageSharp ? props.data.allImageSharp.edges : []
          }
        />
      </Section> */}
      <Section dark>
        <Title dark>Zapytaj siebie</Title>
        {/* <h4>EDUCATION</h4>
        <span>Education I've recieved.</span>
        <Item>
          <span>2012 - 2016</span>
          <h6>BSC COMPUTER SCIENCE (1st Class Honours)</h6>
          <p>Dublin Institute of Technology</p>
        </Item>
        <Item>
          <span>2006 - 2012</span>
          <h6>SECONDARY EDUCATION</h6>
          <p>Saint Declan's College</p>
        </Item> */}
      </Section>
      <a id="success-story">Metamorfozy</a>
      <Section>
        <Title>Metamorfozy</Title>
      </Section>
      <a id="kontakt">Kontakt</a>
      <Section dark> 
        <Title dark>Kontakt</Title>
        <SocialIcons
          // style={{
          //   position: "absolute",
          //   margin: "0 auto",
          //   left: 0,
          //   right: 0,
          //   bottom: 16
          // }}
          icons={[
            {
              name: "facebook",
              href: "https://www.facebook.com/trenerrafalkiszlo/"
            },
            {
              name: "instagram",
              href: "https://www.instagram.com/trener_rafal_kiszlo/?hl=pl"
            },
            {
              name: "linkedin",
              href:
                "https://www.linkedin.com/in/rafa%C5%82-kisz%C5%82o-7ab799153/"
            }
          ]}
        />
      </Section>
    </Content>
  );
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  );
};

// export const query = graphql`
//   query indexQuery {
//     file(relativePath: { "./yellowPlum.svg" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;
// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           timeToRead
//           excerpt(pruneLength: 120)
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             tags
//             image {
//               childImageSharp {
//                 sizes(
//                   maxWidth: 500
//                   duotone: {
//                     highlight: "#333333"
//                     shadow: "#111111"
//                     opacity: 65
//                   }
//                 ) {
//                   ...GatsbyImageSharpSizes
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     allImageSharp: allFile(filter: { relativePath: { regex: "/logos/" } }) {
//       edges {
//         node {
//           id
//           childImageSharp {
//             sizes(maxWidth: 300, grayscale: true) {
//               ...GatsbyImageSharpSizes_tracedSVG
//             }
//           }
//         }
//       }
//     }
//     allFile(filter: { name: { regex: "/signature/" } }) {
//       edges {
//         node {
//           childImageSharp {
//             sizes(maxWidth: 200, grayscale: true) {
//               ...GatsbyImageSharpSizes_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `;
