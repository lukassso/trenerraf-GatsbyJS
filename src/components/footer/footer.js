import React from 'react'
import clsx from 'clsx'
import { withStyles, Container, Typography, Box, Grid } from '@material-ui/core'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import PlaceIcon from '@material-ui/icons/Place'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = (theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.light,
    overflow: 'hidden',
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
    marginLeft: 80,
    '& p': {
      marginLeft: 15,
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: 40,
    },
  },
  placeBox: {
    display: 'flex',
    marginLeft: 80,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
})

function Footer(props) {
  const { classes } = props
  return (
    <React.Fragment>
      <section className={classes.root}>
        <Box className={classes.yellowWrapper}>
          <Typography variant="h4" align="center">
            Skontaktuj się ze mną
          </Typography>
        </Box>
      </section>
      <section className={clsx(classes.root, classes.blackWrapper)}>
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Box className={classes.contactPhone}>
                <Box mt={3} mb={2} display="flex" alignItems="center">
                  <ContactPhoneIcon />
                  <Typography variant="body2" color="initial">
                    + 48 893 323 323
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <ContactMailIcon />
                  <Typography variant="body2" color="initial">
                    jakistam@o2.pl
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={classes.placeBox}>
                <Box
                  pt={6}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <PlaceIcon style={{ fontSize: '2rem' }} />
                </Box>
                <Box mt={1} ml={2}>
                  <Typography variant="body2" color="initial">
                    ul. Piękna 16
                  </Typography>
                  <Typography variant="body2" color="initial">
                    04-900 Warszawa
                  </Typography>
                  <Typography variant="body2" color="initial">
                    Sprawdź na mapie >>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12}>
              <Box mt={4} display="flex" justifyContent="center">
                <Box m={1}>
                  <FacebookIcon style={{ fontSize: '2.5rem' }} />
                </Box>
                <Box m={1}>
                  <InstagramIcon style={{ fontSize: '2.5rem' }} />
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
