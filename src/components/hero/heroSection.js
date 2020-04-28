import React from 'react'
import {
  withStyles,
  Grid,
  Box,
  Container,
  Typography,
  Fab,
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.white,
    overflow: 'hidden',
  
  },

  heroClaim: {
    marginTop: 80,
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: theme.spacing(1),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      padding: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: theme.spacing(1),
    },
    '& h1': {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 20,
      [theme.breakpoints.down('sm')]: {},
    },
    '& h2': {
      fontSize: '0.9rem',
      textAlign: 'center',
      marginBottom: 30,
      lineHeight: 2,
      marginTop: 20,
    },
  },
  heroPicturesWrapper: {
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      // order: 0,
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'center',
    },
  },
  heroPictures1: {
    position: 'relative',
    padding: 0,

  },
  heroPictures2: {

    position: 'absolute !important',
    width: '40%',
    top: 200,
    zIndex: -1,
     [theme.breakpoints.down('sm')]: {
      width: '80%',
      top: 550,
      left: 30
    },
    // '& .gatsby-image-wrapper': {
    //   postion: 'absolute',
     
    // },
  },
  phonePulse: {
    width: 80,
    height: 80,
    boxShadow: '0 0 0 rgba(204,169,44, 0.4)',
    animation: 'pulse 2s infinite',
    '&:hover':{
      animation: 'none',
    }
  }
})

function Hero(props) {
  const { classes } = props
  const data = useStaticQuery(graphql`
    query {
      picHero1: file(
        relativePath: { eq: "pages/images/trener-rafal-tlo-hero.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 695, maxHeight: 858) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      picHero2: file(relativePath: { eq: "pages/images/bcg1-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 899, maxHeight: 814) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={7}>
          <Box className={classes.heroClaim}>
            <Typography variant="h1">Stań się lepszą wersją siebie!</Typography>
            <Typography variant="h3" component="h2" style={{width:'80%'}}>
              Rafał Kiszło - Trener Personalny i najlepszy motywator w mieście!
              Zapraszam na wspólne treningi
            </Typography>
            <Box mt={8}>
              <Fab  className={classes.phonePulse} color="primary" aria-label="call">
                <PhoneIcon style={{ fontSize: 60 }}  />
              </Fab>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={4} className={classes.heroPicturesWrapper}>
            <Box>
              <Img
                className={classes.heroPictures1}
                fluid={data.picHero1.childImageSharp.fluid}
                alt=""
              />
               <Img
                className={classes.heroPictures2}
                fluid={data.picHero2.childImageSharp.fluid}
                alt=""
              />
            </Box>
            <Box>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(useStyles)(Hero)
