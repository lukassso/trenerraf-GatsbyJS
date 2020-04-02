import React from "react";
import { withStyles, Container, Typography } from "@material-ui/core";

const useStyles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.light,
    overflow: "hidden"
  },
  container: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(35),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

function About(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h5" align="center">
          dark about me
        </Typography>
      </Container>
    </section>
  );
}

export default withStyles(useStyles)(About);
