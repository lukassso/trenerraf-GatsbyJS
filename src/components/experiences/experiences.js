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
    paddingTop: 50,
    overflow: 'hidden',
    maxHeight: 700,
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
      '& h5': {
        fontWeight: 600,
        textAlign: 'center',
      },
      '& span': {
        position: 'absolute',
        bottom: 20,
      },
    },
  },
  expWrapper: {
    // paddingBottom: 120,
  },
  expFooterImage: {
    position: 'absolute',
    top: 50,
  },
})

function Experienses(props) {
  const { classes } = props
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
    { id: 2, name: 'Trener Personalny', area: 'Instruktor' },
    { id: 3, name: 'Trener Personalny', area: 'Instruktor' },
    { id: 4, name: 'Trener Personalny', area: 'Instruktor' },
    { id: 5, name: 'Trener Personalny', area: 'Instruktor' },
    { id: 7, name: 'Trener Personalny', area: 'Instruktor' },
  ]
  const ExperienceMap = (props) => {
    return experiencesList.map((experience) => (
      <Grid key={experience.id} className={classes.expItem} item xs={6} sm={4}>
        <Paper className={classes.expPaper} elevation={0} variant="outlined">
          <Typography key={experience.name} variant="h5">
            {experience.name}
          </Typography>
          <Typography key={experience.area}>{experience.area}</Typography>
        </Paper>
      </Grid>
    ))
  }

  return (
    <section className={classes.root}>
      <Container maxWidth="sm">
        <Box pt={4} pb={4} display="flex" alignItems="center">
          <Box style={{ width: '20%' }}>
            <Img fluid={data.pic1.childImageSharp.fluid} alt="" />
          </Box>
          <Box>
            <Typography className={classes.prizesText} variant="h4">
              Zwycięzca w konkursie Motywatory Fitness 2017
            </Typography>
          </Box>
        </Box>
        <Box pt={12} pb={8}>
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
