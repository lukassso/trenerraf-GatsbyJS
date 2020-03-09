import React from 'react';
import styled, { css } from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/navBar';
import HeroSection from '../components/hero';
import Experiences from '../components/experiences';
import About from '../components/about';
import Testimondials from '../components/testimondials';
import SuccesStory from '../components/successStory';



const Content = styled.div`
    & a: {
      display: none;
      margin: 30px; 
    }
  `;
  const Section = styled.div`
    margin: 30px;
  `;
  const Title = styled.div`
    color: red;
  `;
export default (props) => {
  

  const content = (
    <>
      <SEO title="Trener Rafał" />
      <Content>
        <HeroSection>
          {/* <TitleHero>
            <TitleSubheader></TitleSubheader>
          </TitleHero> */}
          {/* <WrapperRight></WrapperRight> */}
        </HeroSection>
        <a id="experience">Doświadczenie</a>
        <Section>
          <Title>Tytuł: Przebyte kursy i szkolenia</Title>
          <Experiences />
        </Section>
        <Section dark>
          <Title dark>Tytuł: O mnie</Title>
          <About />
        </Section>
        <a id="testimondial">Opinie</a>
        <Section>
          <Title>Tytuł: Opinie Klientów</Title>
          <Testimondials />
        </Section>
        <Section dark>
          <Title>Tytul: Zapytaj siebie</Title>
        </Section>
        <Section>
          <Title>Tytul: Metamorfozy</Title>
          <Title small>Tytuł small: Oni odnieśli życiowy sukces</Title>
          <SuccesStory />
        </Section>
        {/* <Footer>
        <ContactRow/>
        <FooterInfo/>
      </Footer> */}
      </Content>
    </>
  );
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  );
};
// export default IndexPage;
