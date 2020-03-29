import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout";
import NavBar from "../components/navBar";
import { Container, Button } from "@material-ui/core";

export default (props) => {
  const content = (
    <Container maxWidth="sm">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <div style={{ margin: 50 }}>
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
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  );
};
