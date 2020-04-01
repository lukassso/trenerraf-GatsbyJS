import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import { Grid, Paper, makeStyles } from '@material-ui/core';
import NavBar from "../components/navBar";
import { Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

export default function Index(props){
  const classes = useStyles();
  const content = (
    <Container maxWidth="sm">
        <div>
        <div>Stań się lepszą wersją siebie!</div>
      </div>
      <a id="experience">Doświadczenie</a>
      <div>
        <div>Przebyte kursy i szkolenia</div>
        <p>Zwycięzca w konkursie "Motywatory Fitness"</p>
        <div>Nagrody i wyróżnienia</div>
        <div>Partnerzy</div>
      </div>
      <a id="testimondial">Opinie</a>
      <div dark>
        <div dark>O mnie</div>
      </div>
      <div>Opinie Klientów</div>
      <div dark>Zapytaj siebie</div>
      <a id="success-story">Metamorfozy</a>
      <div>Metamorfozy</div>
      <a id="kontakt">Kontakt</a>
      <div dark>Kontakt</div>
    </Container>
  );
  return (
    <Layout >
      <NavBar />
      {content}
    </Layout>
  );
};
