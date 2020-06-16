import { useStaticQuery, graphql } from 'gatsby';

export const data = useStaticQuery(
    graphql`
        query pictureData {
            picHero1: file(
                relativePath: { eq: "pages/images/trener-rafal-tlo-hero.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 695, maxHeight: 858) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            picHero2: file(relativePath: { eq: "pages/images/bcg1-hero.png" }) {
                childImageSharp {
                    fluid(maxWidth: 899, maxHeight: 814) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            pic3: file(
                relativePath: { eq: "pages/images/trener-rafal-bcg3.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 570, maxHeight: 360) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `,
);
