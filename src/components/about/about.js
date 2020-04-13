import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { withStyles, Container, Typography, Box } from "@material-ui/core";


const useStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    // overflow: "hidden",
    color: theme.palette.text.secondary,
    
  },
  pictureHeader: {
    position: 'absolute',
    top: 50
  }
  
});



function About(props) {
  const { classes } = props;
  const data = useStaticQuery(graphql`
    query {
      pic3: file(relativePath: { eq: "pages/images/trener-rafal-bcg3.png" }) {
        childImageSharp {
          fluid(maxWidth: 570, maxHeight: 360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3" align="center">
          O mnie
        </Typography>
        <Typography>
          jakiś tekst z historią trenera
        </Typography>
      </Box>
      <Container style={{position: 'relative'}} maxWidth="sm">
        <Img className={classes.pictureHeader} fluid={data.pic3.childImageSharp.fluid} alt=""/>
      </Container>
    </section>
  );
}


export default withStyles(useStyles)(About);
