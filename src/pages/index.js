import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import { Grid, Paper, withStyles } from "@material-ui/core";
import NavBar from "../components/navBar";
import { Container, Button } from "@material-ui/core";
import About from "../components/about";
import Hero from "../components/hero";
import Experiences from "../components/experiences";
import Testimodials from '../components/testimondials';
import SuccessStory from '../components/successStory';
import ContactWithMe from '../components/contactWithMe';
import AskYourself from '../components/askYourself';

const useStyles = theme => ({
  root: {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center'
  },
  wrapper: {
    height: 300,
    display: "block"
  }
});

function Index(props) {
  const { classes } = props;
  const content = (
    <React.Fragment>

   
    <Container className={classes.root}>
      <Hero />
    </Container>
      <a id="experience">Doświadczenie</a>
      <Experiences />
      <a id="testimondial">Opinie</a>

      <About />
     <Testimodials />
     <AskYourself />
      <a id="success-story">Metamorfozy</a>
      <SuccessStory />
      <a id="kontakt">Kontakt</a>
      <ContactWithMe/>
     </React.Fragment>
  );
  return (
    <Layout>
      <NavBar />
      {content}
    </Layout>
  );
}

export default withStyles(useStyles)(Index);
