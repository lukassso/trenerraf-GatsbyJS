import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
  withStyles,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Box
} from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    // overflow: "hidden",
    color: theme.palette.text.secondary,
  },
  pictureHeader: {
    position: "absolute",
    top: 50,
  },
});

function AskYourself(props) {
  const { classes } = props;
  const data = useStaticQuery(graphql`
    query {
      pic4: file(relativePath: { eq: "pages/images/trener-rafal-bcg4.png" }) {
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
      <Container maxWidth={"sm"}>
        <Typography variant="h3" align="center">
          Zapytaj siebie
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              Zastanawiasz się jak zmienić proporcje swojego ciała?
            </ListItemText>
            <ListItemText>
              Masz problem z nadmiarem tkanki tłuszczowej?
            </ListItemText>
            <ListItemText>Chcesz zbudować masę mięśniową?</ListItemText>
          </ListItem>
        </List>
        <Typography variant="h5" color="initial">
          Skontaktuj się, a pomogę Ci wyznaczyć mierzalne cele oraz w pełni je
          zrealizować.
        </Typography>
        <Box textAlign="center">
          <Button variant="contained" color="secondary">
            Przejdź do kontaktu
          </Button>
        </Box>
      </Container>
      <Container style={{ position: "relative" }} maxWidth="sm">
        <Img
          className={classes.pictureHeader}
          fluid={data.pic4.childImageSharp.fluid}
          alt=""
        />
      </Container>
    </section>
  );
}

export default withStyles(useStyles)(AskYourself);
