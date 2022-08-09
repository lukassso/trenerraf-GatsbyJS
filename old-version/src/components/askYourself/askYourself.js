import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Box, Button, Container, Typography, withStyles,} from '@material-ui/core'
import DialpadIcon from '@material-ui/icons/Dialpad'
import DoneAllIcon from '@material-ui/icons/DoneAll'

const useStyles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        // overflow: "hidden",
        color: theme.palette.text.secondary,
        paddingTop: 80,
        paddingBottom: 120,
        maxHeight: 730,
    },
    pictureHeader: {
        position: 'absolute',
        top: 80,
        [theme.breakpoints.down('sm')]: {
            top: 60,
        },
    },
    callToAction: {
        padding: '0 16px',
        border: '1px solid #FDC100',
        borderRadius: 4,
        margin: 8,
    },
})

const query = graphql`
    query {
      pic4: file(relativePath: { eq: "pages/images/trener-rafal-bcg4.png" }) {
        childImageSharp {
          fluid(maxWidth: 588, maxHeight: 398) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

function AskYourself(props) {
    const {classes} = props
    const data = useStaticQuery(query)

    return (
        <Box className={classes.root} component="section">
            <Container maxWidth={'sm'}>
                <Box mb={5}>
                    <Typography variant="h3" align="center">
                        Zapytaj siebie
                    </Typography>
                </Box>
                <Box p={5}>
                    <Box display="flex" align="center">
                        <Box pr={3}>
                            <DoneAllIcon/>
                        </Box>
                        <Box>
                            <Typography align="left" variant="body1" color="initial">
                                Zastanawiasz się jak zmienić proporcje swojego ciała?
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" align="center">
                        <Box pr={3}>
                            <DoneAllIcon/>
                        </Box>
                        <Box>
                            <Typography align="left" variant="body1" color="initial">
                                Masz problem z nadmiarem tkanki tłuszczowej?
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" align="center">
                        <Box pr={3}>
                            <DoneAllIcon/>
                        </Box>
                        <Box>
                            <Typography align="left" variant="body1" color="initial">
                                Chcesz zbudować masę mięśniową?
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.callToAction}>
                    <Box p={5} mt={4} mb={4}>
                        <Typography variant="body2" align="center" color="initial">
                            Skontaktuj się, a pomogę Ci wyznaczyć mierzalne cele oraz w pełni
                            je zrealizować.
                        </Typography>
                    </Box>
                    <Box mt={4} mb={4} textAlign="center">
                        <Button
                            fullWidth
                            href="tel:+48608472294"
                            startIcon={<DialpadIcon/>}
                            variant="contained"
                            color="secondary"
                        >
                            Zadzwoń teraz i dowiedz się więcej
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Container style={{position: 'relative'}} maxWidth="sm">
                <Img
                    className={classes.pictureHeader}
                    fluid={data.pic4.childImageSharp.fluid}
                    alt="Rafał Kiszło - trener Mokotów"
                />
            </Container>
        </Box>
    )
}

export default withStyles(useStyles)(AskYourself)
