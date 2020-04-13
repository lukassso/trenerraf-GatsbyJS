import React, { Component } from "react";
import { withStyles, Container, Typography } from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.default,
  },
});
const data = [
  {id: 1, testimondial: 'nnn', name: 'test test', position: 'testowe', picture: 'ddd'},
  {id: 2, testimondial: 'nnn', name: 'test test', position: 'testowe', picture: 'ddd'}
]
class Testimondials extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <Container>
          <Typography variant="h3" align="center">
            Opinie Klientów
          </Typography>
        </Container>
      </section>
    );
  }
}

export default withStyles(useStyles)(Testimondials);
