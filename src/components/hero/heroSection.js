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
import { getCorrectEventName } from '@material/animation'

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.white,
    overflow: 'hidden',
  },

  heroClaim: {
    margin: '20px 160px',
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'column',
    lineHeight: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      margin: 40,
      paddingTop: 30,
    },
    [theme.breakpoints.down('sm')]: {
      margin: 20,
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: theme.spacing(1),
    },

    '& h1': {
      fontSize: '3rem',
      textAlign: 'left',
      marginBottom: 30,
      marginTop: 20,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: '2rem',
      },
    },
    '& h2': {
      fontSize: '1.3rem',
      fontWeight: 200,
      textAlign: 'left',
      marginBottom: 30,
      lineHeight: 2,
      marginTop: 20,
      [theme.breakpoints.down('md')]: {
        fontSize: '1.1rem',
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: '1rem',
      },
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
      left: 30,
    },
    // '& .gatsby-image-wrapper': {
    //   postion: 'absolute',

    // },
  },
  phonePulse: {
    width: 120,
    height: 120,
    border: '4px solid red',
    boxShadow: '0 0 0 rgba(204,169,44, 0.4)',
    transition: 'opacity 2s linear',
    // transform: 'rotate(30deg)',
    animation: 'pulse 2s infinite',
    [theme.breakpoints.down('sm')]: {
      width: 90,
      height: 90,
    },
    '&:hover': {
      animation: 'none',
      opacity: 0.4,
    },

  },
    '@keyframes pulse': {
      '0%': {
        
        boxShadow: '0 0 0 #FDC100',
      },
      '50%': {
        border: '8px solid black',
        boxShadow: '0 0 200px #FDC100',
      },
      '100%': {
        boxShadow: '0 0 0 #FDC100',
      },
    },
  iconPhoneWrapper: {
    textAlign: 'center',
    paddingTop: 100,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 30,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 20,
    },
  },
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
            <Typography variant="h3" component="h2">
              Rafał Kiszło - Trener Personalny i najlepszy motywator w mieście!
              Zapraszam na wspólne treningi.
            </Typography>
            <Box className={classes.iconPhoneWrapper}>
              <Fab
                className={classes.phonePulse}
                color="primary"
                aria-label="call"
              >
                <PhoneIcon style={{ fontSize: 60 }} />
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
            <Box></Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(useStyles)(Hero)
