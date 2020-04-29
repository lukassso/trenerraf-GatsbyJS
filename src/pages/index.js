import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import NavBar from '../components/navBar'
import { Container, Button } from '@material-ui/core'
import About from '../components/about'
import Hero from '../components/hero'
import Experiences from '../components/experiences'
import Testimondials from '../components/testimondials'
import SuccessStory from '../components/successStory'
import AskYourself from '../components/askYourself'

// const useStyles = (theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     //  backgroundColor: "#d4d4d4"
//   },
//   wrapper: {
//     height: 300,
//     display: "block",
//   },
// });

function Index(props) {
  // const { classes } = props;
  const content = (
    <React.Fragment>
      <Hero />
      {/* <a id="experience">Doświadczenie</a> */}
      <Experiences />
      <About />
      {/* <a id="testimondial">Opinie</a> */}
      <Testimondials />
      <AskYourself />
      {/* <a id="success-story">Metamorfozy</a> */}
      <SuccessStory />
      {/* <a id="kontakt">Kontakt</a> */}
      {/* <ContactWithMe /> */}
    </React.Fragment>
  )
  return (
    <Layout>
      <NavBar />
      {content}
    </Layout>
  )
}

// export default withStyles(useStyles)(Index);
export default Index
