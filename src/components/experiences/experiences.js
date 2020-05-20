import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  withStyles,
  Container,
  Typography,
  Grid,
  Box,
  Paper,
} from '@material-ui/core'

const useStyles = (theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.background.gray,
    // paddingTop: 50,
    maxHeight: 750,
    [theme.breakpoints.down('sm')]: {
      maxHeight: 850,
    },
  },
  expHeader: {
    textAlign: 'center',
  },

  expPaper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: theme.palette.primary.main,
    minHeight: 120,
    margin: 10,
    padding: 25,
    [theme.breakpoints.down('sm')]: {
      minHeight: 120,
      margin: 10,
      padding: 25,
    },
    '& h5': {
      fontSize: '1.2rem',
      fontWeight: 600,
      lineHeight: 1.2,
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        lineHeight: 1.1,
      },
    },
    '& p': {
      position: 'absolute',
      bottom: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
      },
    },
  },

  expWrapper: {
    // paddingBottom: 120,
  },
  expFooterImage: {
    zIndex: 1,
    position: 'absolute',
    top: 20,
    [theme.breakpoints.down('sm')]: {},
  },
  prizesText: {
    paddingLeft: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      lineHeight: '1.4',
      fontWeight: '600',
    },
  },
  priceWrapper: {
    padding: '0 20px',
  },
  priceHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    borderBottom: '1px solid black',
  },
})

function Experienses({classes, id}) {
  const data = useStaticQuery(graphql`
    query {
      pic1: file(relativePath: { eq: "pages/images/superfm-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 216, maxHeight: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic2: file(relativePath: { eq: "pages/images/trener-rafal-bcg2.png" }) {
        childImageSharp {
          fluid(maxWidth: 620, maxHeight: 517) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const experiencesList = [
    { id: 1, name: 'Trener Personalny', area: 'Instruktor' },
    { id: 2, name: 'Nurek CMASS', area: 'Instruktor' },
    { id: 3, name: 'Kattleballs', area: 'Instruktor' },
    { id: 4, name: 'Kulturystyka', area: 'Instruktor' },
    { id: 5, name: 'Trening Funkcjonalny', area: 'Instruktor' },
    { id: 7, name: 'Trójbuj siłowy', area: 'Instruktor' },
  ]
  const ExperienceMap = (props) => {
    return experiencesList.map((experience) => (
      <Grid key={experience.id} className={classes.expItem} item xs={6} sm={4}>
        <Paper className={classes.expPaper} elevation={0} variant="outlined">
          <Typography key={experience.name} variant="h5">
            {experience.name}
          </Typography>
          <Typography variant="body1" key={experience.area}>
            {experience.area}
          </Typography>
        </Paper>
      </Grid>
    ))
  }

  return (
    <section id={id} className={classes.root}>
      <Container className={classes.priceWrapper} maxWidth="sm">
        <Box className={classes.priceHeader}>
          <Box style={{ width: '30%' }}>
            <Img fluid={data.pic1.childImageSharp.fluid} alt="" />
          </Box>
          <Box>
            <Typography className={classes.prizesText} variant="h4">
              Zwycięzca w konkursie Motywatory Fitness 2017
            </Typography>
          </Box>
        </Box>
        <Box pt={12} pb={10}>
          <Typography className={classes.expHeader} variant="h3">
            Przebyte kursy i szkolenia
          </Typography>
        </Box>
      </Container>
      <Container className={classes.expWrapper} maxWidth="md">
        <Grid container direction="row" justify="center" alignItems="center">
          <ExperienceMap />
        </Grid>
      </Container>
      <Container style={{ position: 'relative' }} maxWidth="sm">
        <Img
          className={classes.expFooterImage}
          fluid={data.pic2.childImageSharp.fluid}
          alt=""
        />
      </Container>
    </section>
  )
}

export default withStyles(useStyles)(Experienses)
