import React from "react";
import { withStyles, Container, Typography } from "@material-ui/core";

const useStyles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.light,
    overflow: "hidden"
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

function Experienes(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h5" align="center">
          <div>
        <div>Przebyte kursy i szkolenia</div>
        <p>Zwycięzca w konkursie "Motywatory Fitness"</p>
        <div>Nagrody i wyróżnienia</div>
        <div>Partnerzy</div>
      </div>
        </Typography>
      </Container>
    </section>
  );
}

export default withStyles(useStyles)(Experienes);