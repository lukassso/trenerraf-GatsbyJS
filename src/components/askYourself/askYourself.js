import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  withStyles,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from '@material-ui/core'

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    // overflow: "hidden",
    color: theme.palette.text.secondary,
    paddingTop: 80,
    paddingBottom: 80,
    maxHeight: 600,
  },
  pictureHeader: {
    position: 'absolute',
    top: 50,
  },
})

function AskYourself(props) {
  const { classes } = props
  const data = useStaticQuery(graphql`
    query {
      pic4: file(relativePath: { eq: "pages/images/trener-rafal-bcg4.png" }) {
        childImageSharp {
          fluid(maxWidth: 570, maxHeight: 398) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box className={classes.root} component="section">
      <Container maxWidth={'sm'}>
        <Box mb={5}>
          <Typography variant="h3" align="center">
            Zapytaj siebie
          </Typography>
        </Box>
        <Box pt={5} pb={5}>
          <List>
            <ListItem>
              <ListItemText>
                Zastanawiasz się jak zmienić proporcje swojego ciała?
              </ListItemText>
              <ListItemText>
                Masz problem z nadmiarem tkanki tłuszczowej?
              </ListItemText>
              <ListItemText>Chcesz zbudować masę mięśniową?</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box mt={4} mb={4}>
          <Typography variant="h5" color="initial">
            Skontaktuj się, a pomogę Ci wyznaczyć mierzalne cele oraz w pełni je
            zrealizować.
          </Typography>
        </Box>
        <Box mt={15} mb={4} textAlign="center">
          <Button variant="contained" color="secondary">
            Przejdź do kontaktu
          </Button>
        </Box>
      </Container>
      <Container style={{ position: 'relative' }} maxWidth="sm">
        <Img
          className={classes.pictureHeader}
          fluid={data.pic4.childImageSharp.fluid}
          alt=""
        />
      </Container>
    </Box>
  )
}

export default withStyles(useStyles)(AskYourself)
