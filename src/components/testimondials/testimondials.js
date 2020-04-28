import React, { Component } from 'react'
import { dataTestimondials } from './dataTestimondials'
import {
  withStyles,
  Container,
  Typography,
  Grid,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 200,
    paddingBottom: 100,
  },
  testimondialWrapper: {
    padding: 10,
  },
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
})
class Testimondials extends Component {
  render() {
    const { classes } = this.props

    const Opinion = (props) => {
      return dataTestimondials.map((testimondial, index) => (
        <Box spacing={1} className={classes.testimondialWrapper}>
          <Typography key={testimondial.text}>{testimondial.text}</Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  key={testimondial.name}
                  alt={testimondial.name}
                  src={require(`${testimondial.picture}`)}
                  className={classes.small}
                />
              </ListItemAvatar>
              <ListItemText
                key={testimondial.name}
                primary={testimondial.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      key={testimondial.date}
                      component="span"
                      variant="body2"
                      color="primary"
                    >
                      {testimondial.date}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      ))
    }

    return (
      <section className={classes.root}>
        <Container maxWidth="md">
          <Box display="flex" alignItems="center" flexDirection="column">
            <Box pb={10}>
              <Typography variant="h3" align="center">
                Opinie Klientów
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Opinion />
            </Box>
            <Box mt={7} textAlign="center">
              <Button
                size="large"
                startIcon={<ExpandMoreIcon />}
                variant="contained"
                color="primary"
              >
                Wyświetl więcej
              </Button>
            </Box>
          </Box>
        </Container>
      </section>
    )
  }
}

export default withStyles(useStyles)(Testimondials)
