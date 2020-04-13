import React from "react";
import { withStyles, Grid, Container, Typography, Fab } from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.white,
    overflow: "hidden",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    display: "flex",
 
  },
  heroClaim: {
    [theme.breakpoints.down('sm')]: {
      padding: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: theme.spacing(1),
      '& h1':{
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: 30
      },
      '& h2': {
        fontSize: '0.9rem',
        textAlign: 'center',
        marginBottom: 30
      }
    }
  },
  heroPicturesWrapper: {
    [theme.breakpoints.down('sm')]:{
      order: 0,
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
    }
    
  }
});

function Hero(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Grid container className={classes.container}>
        <Grid className={classes.heroClaim}item xs={12} md={7}>
          <Typography variant="h1">Stań się lepszą wersją siebie!</Typography>
          <Typography variant="h5" component="h2">
            Rafał Kiszło - Trener Personalny i najlepszy motywator w mieście!
            Zapraszam na wspólne treningi
          </Typography>
          <Fab color="primary" aria-label="call">
            <PhoneIcon/>
          </Fab>
        </Grid>
        <Grid className={classes.heroPicturesWrapper} item xs={12} md={5}>
          <Typography variant="h3">
            photo images responsive!
          </Typography>
            
        </Grid>
        
      </Grid>
    </section>
  );
}

export default withStyles(useStyles)(Hero);
