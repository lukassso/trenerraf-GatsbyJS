import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { withStyles, Container, Typography, Box } from '@material-ui/core'

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    // overflow: "hidden",
    color: theme.palette.text.secondary,
  },
  pictureHeader: {
    position: 'absolute',
    top: 50,
  },
})

function About(props) {
  const { classes } = props
  const data = useStaticQuery(graphql`
    query {
      pic3: file(relativePath: { eq: "pages/images/trener-rafal-bcg3.png" }) {
        childImageSharp {
          fluid(maxWidth: 570, maxHeight: 360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className={classes.root}>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center">
          O mnie
        </Typography>
        <Typography>
          Witam nazywam się Rafał Kiszło i jestem wykfalifikowanym trenerem
          personalnym. Od wielu lat pomagam swoim podopiecznym w uzyskaniu
          wymarzonej sylwetki, poprawie sprawności, przygotowaniu się do różnych
          dyscyplin sportu, wyjściu z kontuzji czyli byciu lepszą wersją siebie.
          Fundamentem mojej wiedzy jest wykształcenie zdobyte Wyższej Szkole
          Wychowania Fizycznego i Turystyki w Białymstoku ( wychowanie fizyczne
          ) czy wieloletnie treningi w klubie sportowym. Od ponad 12 lat pomagam
          podopiecznym w osiąganiu ich celów. W mojej pracy najważniejszy jest
          klient, a z jego sukcesu czerpie paliwo do pracy. Cały czas się
          szkolę, aby moje kwalifikacje pomogły w osiągnięciu Twojego sukcesu.
          Zapraszam do sprawdzenia moich kwalifikacji w dziale " kursy i
          szkolenia". Wiele lat pracy jako trener i tysiące przeprowadzonych
          treningów spowodują, że moje doświadczenie pomoże nam w osiągnięciu
          zamierzonego celu. Najważniejszy jesteś Ty i postaram się sprawić,
          abyś wracał na treningi z uśmiechem! W 2017 roku wygrałem konkurs
          Fitness Motywatory w kat. Trener personalny. Mogę pomóc również ułożyć
          ci zbilansowaną dietę, która również będzie pomocna w osiągnięciu celu
          sportowego. Każdy trening jest indywidualny i dostosowany pod twój
          cel. Podczas treningów używam różnych metod treningu tak, aby trening
          był atrakcyjny dla Ciebie. Zapraszam do współpracy!
        </Typography>
      </Container>
      <Container style={{ position: 'relative' }} maxWidth="sm">
        <Img
          className={classes.pictureHeader}
          fluid={data.pic3.childImageSharp.fluid}
          alt=""
        />
      </Container>
    </section>
  )
}

export default withStyles(useStyles)(About)
