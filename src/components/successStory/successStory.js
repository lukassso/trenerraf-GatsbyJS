import React from "react";
import { withStyles, Container, Typography } from "@material-ui/core";

const useStyles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.light,
    overflow: "hidden"
  },
  container: {
    marginTop: theme.spacing(130),
    marginBottom: theme.spacing(135),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

function SuccessStory(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h5" align="center">
          Metamorfozy
        </Typography>
      </Container>
    </section>
  );
}

export default withStyles(useStyles)(SuccessStory);