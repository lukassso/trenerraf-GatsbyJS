import React from 'react'
import clsx from 'clsx'
import { withStyles, Container, Typography, Box, Grid } from '@material-ui/core'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import PlaceIcon from '@material-ui/icons/Place'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    overflow: 'hidden',
    '& p': {
      fontSize: '1rem',
      paddingLeft: 15,
    },
  },
  yellowWrapper: {
    backgroundColor: theme.palette.background.yellow,
    padding: 30,
  },
  blackWrapper: {
    padding: '30px 0 20px',
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.text.yellow,
  },
  contactPhone: {
    display: 'block',
    width: 200,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {},
    '& div': {
      paddingTop: 10,
      paddingBottom: 5,
    },
  },
  placeBox: {
    display: 'block',
    textAlign: 'left',
    width: 200,
    [theme.breakpoints.down('sm')]: {},
  },
  adressFooter: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: 200,
      margin: '0 auto',
      '& p': {
        // fontSize: '0.8rem',
        // paddingBottom:15,
      },
    },
  },
  mapFooter: {
    '& p': {
      fontSize: '0.8rem',
      paddingLeft: 40,
    },
  },
})

function Footer({classes, id}) {
  return (
    <React.Fragment>
      <section id={id} className={classes.root}>
        <Box className={classes.yellowWrapper}>
          <Typography variant="h3" align="center" width="100%">
            Skontaktuj się ze mną
          </Typography>
        </Box>
      </section>
      <section className={clsx(classes.root, classes.blackWrapper)}>
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Box className={classes.contactPhone}>
                <Box display="flex" alignItems="center">
                  <ContactPhoneIcon />
                  <Typography color="initial">+ 48 893 323 323</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <ContactMailIcon />
                  <Typography color="initial">jakistam@o2.pl</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box className={classes.adressFooter}>
                <Box pt={2} display="flex" alignItems="center">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <PlaceIcon />
                  </Box>
                  <Box className={classes.placeBox}>
                    <Typography color="initial">ul. Piękna 16</Typography>
                    <Typography color="initial">04-900 Warszawa</Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.mapFooter}
                  ml={0}
                >
                  <Box>
                    <Typography color="initial">Sprawdź na mapie</Typography>
                  </Box>
                  <Box pt={1}>
                    <OpenInNewIcon />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12}>
              <Box mt={4} display="flex" justifyContent="center">
                <Box m={3}>
                  <FacebookIcon style={{ fontSize: '3.5rem' }} />
                </Box>
                <Box m={3}>
                  <InstagramIcon style={{ fontSize: '3.5rem' }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default withStyles(useStyles)(Footer)
