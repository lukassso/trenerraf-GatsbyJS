// import { useStaticQuery, graphql } from 'gatsby';
// export const useSiteMetadata = () => {
//     const { site } = useStaticQuery(
//         graphql`
//             query SiteMetaData {
//                 site {
//                     siteMetadata {
//                         title
//                         siteUrl
//                         headline
//                         description
//                         image
//                         video
//                         twitter
//                         name
//                         logo
//                     }
// //                 }
// //             }
// //         `,
//     );

//     export const { data } = useStaticQuery(
//         graphql`
//             query pictureData {
//                 pic3: file(
//                     relativePath: { eq: "pages/images/trener-rafal-bcg3.png" }
//                 ) {
//                     childImageSharp {
//                         fluid(maxWidth: 570, maxHeight: 360) {
//                             ...GatsbyImageSharpFluid
//                         }
//                     }
//                 }
//             }
//         `,
//     );
//     return site.siteMetadata;
// };
