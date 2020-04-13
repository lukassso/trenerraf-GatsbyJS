import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  withStyles,
  Container,
  Typography,
  Grid,
  Box,
  Paper,
} from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.gray,
    overflow: "hidden",
  },
  expHeader: {
    textAlign: "center",
  },

  expPaper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderColor: theme.palette.primary.main,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      minHeight: 120,
      margin: 10,
      padding: 25,
      "& h5": {
        fontWeight: 600,
        textAlign: "center",
      },
      "& span": {
        position: "absolute",
        bottom: 20,
      },
    },
  },
});

function Experienses(props) {
  const { classes } = props;
  const data = useStaticQuery(graphql`
    query {
      pic1: file(relativePath: { eq: "pages/images/superfm-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 216, maxHeight: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic2: file(relativePath: { eq: "pages/images/trener-rafal-bcg2.png" }) {
        childImageSharp {
          fluid(maxWidth: 620, maxHeight: 517) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const ExperienceMap = (props) => {
    return experiencesList.map((experience) => (
      <Grid key={experience.id} className={classes.expItem} item xs={6} sm={4}>
        <Paper className={classes.expPaper} elevation={0} variant="outlined">
          <Typography key={experience.name} variant="h5">
            {experience.name}
          </Typography>
          <Typography key={experience.area}>{experience.area}</Typography>
        </Paper>
      </Grid>
    ));
  };
 
  const experiencesList = [
    { id: 1, name: "Trener Personalny", area: "Instruktor" },
    { id: 2, name: "Trener Personalny", area: "Instruktor" },
    { id: 3, name: "Trener Personalny", area: "Instruktor" },
    { id: 4, name: "Trener Personalny", area: "Instruktor" },
    { id: 5, name: "Trener Personalny", area: "Instruktor" },
    { id: 7, name: "Trener Personalny", area: "Instruktor" },
  ];

  return (
    <section className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.expHeader} variant="h3">
            Przebyte kursy i szkolenia
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="sm">
        <Grid container direction="row" justify="center" alignItems="center">
          <ExperienceMap />
        </Grid>
      </Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.expHeader} variant="h3">
            Nagrody i wyróżnienia
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Img fluid={data.pic1.childImageSharp.fluid} alt="" />
        </Grid>
        <Grid item xs={8}>
          <Typography className={classes.prizesText} variant="h4">
            Zwycięzca w konkursie Motywatory Fitness 2017
          </Typography>
        </Grid>
      </Grid>
      {/* <Box display="flex" alignItems="center"> */}
      <Container maxWidth="sm">
        <Img fluid={data.pic2.childImageSharp.fluid} alt="" />
      </Container>
      {/* </Box> */}
    </section>
  );
  
}

 

export default withStyles(useStyles)(Experienses);
