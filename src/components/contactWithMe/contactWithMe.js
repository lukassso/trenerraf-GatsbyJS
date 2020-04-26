import React from 'react'
import clsx from 'clsx'
import { withStyles, Container, Typography, Box, Grid } from '@material-ui/core'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import PlaceIcon from '@material-ui/icons/Place'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = (theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.light,
    overflow: 'hidden',
  },
  yellowWrapper: {
    backgroundColor: theme.palette.background.yellow,
    padding: 20,
  },
  blackWrapper: {
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.text.secondary,
  },
})

function ContactWithMe(props) {
  const { classes } = props
  return (
    <React.Fragment>
      <section className={classes.root}>
        <Box className={classes.yellowWrapper}>
          <Typography variant="h5" align="center">
            Skontaktuj się ze mną
          </Typography>
        </Box>
      </section>
      <section className={clsx(classes.root, classes.blackWrapper)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box display="flex">
              <ContactPhoneIcon />
              <Typography variant="body1" color="initial">
                + 48 893 323 323
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body1" color="initial">
          telefon
        </Typography>
      </section>
    </React.Fragment>
  )
}

export default withStyles(useStyles)(ContactWithMe)
