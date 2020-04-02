import React from "react";
import { withStyles, Container, Typography } from "@material-ui/core";

const useStyles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.default,
    overflow: "hidden"
  },
  container: {
    marginTop: theme.spacing(40),
    marginBottom: theme.spacing(45),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

function AskYourself(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h5" align="center">
          dark Zapytaj siebie
        </Typography>
      </Container>
    </section>
  );
}

export default withStyles(useStyles)(AskYourself);