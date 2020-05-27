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
  Divider,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'

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
  avatarAndName: {
    '& li': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})
class Testimondials extends Component {
  render() {
    const { classes, id } = this.props

    const Opinion = (props) => {
      return dataTestimondials.map((testimondial, index) => (
        <Box className={classes.testimondialWrapper}>
          <Box align="center" width="100%" m={2} mt={4}>
            <ChatBubbleOutlineIcon />
          </Box>
          <Box pl={8} pr={8}>
            <Typography key={testimondial.text}>{testimondial.text}</Typography>
            <List className={classes.avatarAndName}>
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
          <Divider />
        </Box>
      ))
    }

    return (
      <section id={id} name="testimondials" className={classes.root}>
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
            <Box pt={11} textAlign="center">
              <Button
                size="large"
                startIcon={<ExpandMoreIcon />}
                variant="outlined"
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
