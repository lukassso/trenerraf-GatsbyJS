import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { withStyles, Container, Typography, Box } from '@material-ui/core'

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.text.secondary,
    position: 'relative',
    paddingBottom: -180,
    minHeight:'100%',
    // maxHeight: 800,
    [theme.breakpoints.down('sm')]: {
      // maxHeight: 1000,
    },
  },
  pictureHeader: {
    position: 'relative',
    top: 120,
    left: 0,
    right: 0,
    [theme.breakpoints.down('sm')]: {
      // top: 150,
    },
  },
  headerName: {
    paddingTop: 240,
    paddingBottom: 40,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 200,
    },
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
    <Box position="relative" component="section">
      <Box className={classes.root}>
        <Container maxWidth="md">
          <Box className={classes.headerName} align="center">
            <Typography variant="h3">O mnie</Typography>
          </Box>
          <Box p={10} pb={0} pt={0}>
            <Typography >
              Witam. Nazywam się Rafał Kiszło i jestem wykfalifikowanym trenerem
              personalnym. Od wielu lat pomagam swoim podopiecznym w uzyskaniu
              wymarzonej sylwetki, poprawie sprawności, przygotowaniu się do
              różnych dyscyplin sportu, wyjściu z kontuzji czyli byciu lepszą
              wersją siebie. Fundamentem mojej wiedzy jest wykształcenie zdobyte
              Wyższej Szkole Wychowania Fizycznego i Turystyki w Białymstoku (
              wychowanie fizyczne ) czy wieloletnie treningi w klubie sportowym.
              Od ponad 12 lat pomagam podopiecznym w osiąganiu ich celów. W
              mojej pracy najważniejszy jest klient, a z jego sukcesu czerpie
              paliwo do pracy. Cały czas się szkolę, aby moje kwalifikacje
              pomogły w osiągnięciu Twojego sukcesu. Zapraszam do sprawdzenia
              moich kwalifikacji w dziale " kursy i szkolenia". Wiele lat pracy
              jako trener i tysiące przeprowadzonych treningów spowodują, że
              moje doświadczenie pomoże nam w osiągnięciu zamierzonego celu.
              Najważniejszy jesteś Ty i postaram się sprawić, abyś wracał na
              treningi z uśmiechem! W 2017 roku wygrałem konkurs Fitness
              Motywatory w kat. Trener personalny. Mogę pomóc również ułożyć ci
              zbilansowaną dietę, która również będzie pomocna w osiągnięciu
              celu sportowego. Każdy trening jest indywidualny i dostosowany pod
              twój cel. Podczas treningów używam różnych metod treningu tak, aby
              trening był atrakcyjny dla Ciebie. Zapraszam do współpracy!
            </Typography>
          </Box>
        </Container>
         <Container className={classes.pictureHeader} maxWidth="sm">
        <Img
          fluid={data.pic3.childImageSharp.fluid}
          alt=""
        />
      </Container>
      </Box>
     
    </Box>
  )
}

export default withStyles(useStyles)(About)
