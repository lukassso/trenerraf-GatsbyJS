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

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
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
      <Container component="section" className={classes.root} maxWidth="lg">
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography variant="h3" align="center">
            Opinie Klientów
          </Typography>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Opinion />
          </Box>
          <Box textAlign="center">
            <Button variant="contained" color="primary">
              Wyświetl więcej
            </Button>
          </Box>
        </Box>
      </Container>
    )
  }
}

export default withStyles(useStyles)(Testimondials)
